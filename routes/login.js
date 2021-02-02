const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Hash Contraseña
const bcrypt = require('bcrypt')

// JWT
const jwt = require('jsonwebtoken');

// login
router.post('/login', async(req, res) => {
    try {
        
        // Buscamos email en DB
        const usuario = await User.findOne({ email: req.body.email })

        // Evaluamos si existe el usuario en DB
        if(!usuario){
            return res.status(400).json({ mensaje: 'Usuario o contraseña inválidos' })
        }

        // Validamos la contraseña correcta
        if( !bcrypt.compareSync(req.body.password, usuario.password) ){
            return res.status(400).json({ mensaje: 'Usuario y/o contraseña inválidos', })
        }

        // Generar Token
        const token = jwt.sign({ data: usuario }, process.env.JWT_SECRET || 'secret', { expiresIn: 60 * 60 * 24 * 30}) // Expira en 30 días

        // Pasó las validaciones
        return res.json({ usuario, token })

    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error', error })
    }
});

module.exports = router