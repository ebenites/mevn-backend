const express = require('express')
const router = express.Router()

const User = require('../models/user')

const { auth, admin } = require('../middlewares/auth.js')

// Hash Contraseña
const bcrypt = require('bcrypt')
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

// Agregar un usuario
router.post('/user', [ auth, admin ], async(req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds)
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Get con parámetros
router.get('/user/:id', [ auth, admin ], async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Get con todos los documentos
router.get('/user', [ auth, admin ], async(req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Put actualizar un usuario
router.put('/user/:id', [ auth, admin ], async(req, res) => {
    try {
        const body = _.pick(req.body, ['fullname', 'email', 'password']);   // Permitir solo modificar estos tres campos
        if(body.password) {
            body.password = bcrypt.hashSync(body.password, saltRounds)
        }
        const user = await User.findByIdAndUpdate(req.params.id, body, { new: true });  // new: devolver registro actualizado?
        res.json(user)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Delete eliminar una nota
router.delete('/user/:id', [ auth, admin ], async(req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id })
        if(!user){
            return res.status(400).json({ mensaje: 'No se encontró el usuario indicado' })
        }
        res.json(user)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

module.exports = router