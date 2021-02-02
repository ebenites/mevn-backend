const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} rol no válido'
}

const userSchema = new Schema({
    fullname: { type: String, required: [true, "El nombre es necesario"] },
    email: { type: String, unique: true, required: [true, "El email es necesario"] },
    password: { type: String, required: [true, "El password es necesario"] },
    date: { type: Date, default: Date.now },
    role: { type: String, default: 'USER', enum: roles },
    status: { type: Boolean, default: true },
})

// Validator
const uniqueValidator = require('mongoose-unique-validator');
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Ignorar password de respuesta JSON
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

const User = mongoose.model('User', userSchema)
module.exports = User