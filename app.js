const express = require('express')  // Require babel for to use import from ES6 (npm run devbabel)
const app = express()

// Variables Globales
app.set('port', process.env.PORT || 3000)
app.set('uri', process.env.PORT || 'mongodb://localhost:27017/app')

const morgan = require('morgan')
app.use(morgan('tiny'))

const cors = require('cors')
app.use(cors())

app.use(express.json())

// Envías como application/x-www-form-urlencoded y lo recibes como json body
app.use(express.urlencoded({ extended: true }))

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.use('/api', require('./routes/note'))
app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/login'))

// Middleware para Vue.js router modo history (Debajo de las rutas express) Al presionar F5 en una ruta estática de vue no te botará error 404
const history = require('connect-history-api-fallback')
app.use(history());

// Para acceder al directorio actual (Debajo de las rutas express)
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

// https://mongoosejs.com/docs/guide.html
const mongoose = require('mongoose')
mongoose.connect(app.get('uri'), { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('Connecting to mongodb')
}, err => { err })

app.listen(app.get('port'), () => {
    console.log('Starting on the port: ', app.get('port'))
});