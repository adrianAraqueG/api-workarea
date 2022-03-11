import express from 'express';
import db from '../config/db.js';
const router = express.Router();

const mw = (req, res, next) =>{
    console.log('esto es un middleware');
}

// -- Rutas GET


// -- Rutas POST
router.post('/login', mw,(req, res) =>{
    let respuesta = {}
    let info = req.body;

    if(info.user !== db.user){
        respuesta = {
            msg: 'Usuario inválido'
        }
        return res.send(respuesta);
    } else if(info.pass !== db.pass){
        respuesta = {
            msg: 'Contraseña Incorrecta'
        }
        return res.send(respuesta);
    }

    respuesta = {
        msg: 'Usuario y contraseña validados...'
    }

    return res.send(respuesta);

    
});

// -- Rutas PUT


// -- Rutas DELETE



export default router;