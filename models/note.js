const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: { type: String, required: [ true, 'Título es obligatorio' ] },
    description: String,
    userid: String,
    date:{ type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})

const Note = mongoose.model('Note', noteSchema)
module.exports = Note