const express = require('express');
const router = express.Router();            
const {obtenerAmbulanciasCtrl, crearAmbulanciaCtrl} = require('../controllers/ambulanciasCtrl')

router.get('/', obtenerAmbulanciasCtrl); 

router.post('/', crearAmbulanciaCtrl);





module.exports = router 