const express = require('express')
const router = express.Router()

const Note = require('../models/note')

const { auth } = require('../middlewares/auth.js')

// Agregar una nota
router.post('/note', auth, async(req, res) => {
    try {
        req.body.userid = req.user._id
        const note = await Note.create(req.body);
        res.json(note)
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Get con parámetros
router.get('/note/:id', auth, async(req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, userid: req.user._id });
        if(!note){
            return res.status(400).json({ mensaje: 'No se encontró el id indicado' })
        }
        res.json(note)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Get con todos los documentos
router.get('/note', auth, async(req, res) => {
    try {
        const notes = await Note.find({ userid: req.user._id });
        res.json(notes)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Put actualizar una nota
router.put('/note/:id', auth, async(req, res) => {
    try {
        const note = await Note.findOneAndUpdate({ _id: req.params.id, userid: req.user._id }, req.body, { new: true });  // new: devolver registro actualizado?
        console.log(note)
        if(!note){
            return res.status(400).json({ mensaje: 'No se encontró el id indicado' })
        }
        res.json(note) 
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

// Delete eliminar una nota
router.delete('/note/:id', auth, async(req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, userid: req.user._id });
        if(!note){
            return res.status(400).json({ mensaje: 'No se encontró el id indicado' })
        }
        res.json(note)
    } catch (error) {
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    }
});

module.exports = router