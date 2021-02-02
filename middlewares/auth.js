const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    let token = req.get('Authorization')    // Bearer eyJhbGciOiJIUzI1NiIsInR...
    // console.log(token)

    if(token) {
        token = token.replace('Bearer ', '')    // Remove Bearer prefix
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {

        if(err) {
            return res.status(401).json({ mensaje: 'Error de token', err })
        }
    
        // Creamos una nueva propiedad con la info del usuario
        req.user = decoded.data; //data viene al generar el token en login.js
        next()
    
    });

}

let admin = (req, res, next) => {

    let role = req.user.role
    // console.log(role)
    
    if(role !== 'ADMIN'){
        return res.status(401).json({ mensaje: 'Rol no autorizado!' })
    }
    
    next()

}

module.exports = { auth, admin }