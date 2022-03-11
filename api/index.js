// -- Imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/index.js';


// -- Iniciar express
const app = express();



// -- Configuraciones
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))




// -- Usar el router
app.use(router);









// 404
app.use(function(req, res, next) {
    let respuesta = {
    error: true, 
    codigo: 404, 
    mensaje: 'URL no encontrada'
    };

    res.status(404).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});