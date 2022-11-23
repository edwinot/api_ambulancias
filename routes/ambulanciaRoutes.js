const express = require('express');
const router = express.Router();
const { obtenerAmbulanciasCtrl, crearAmbulanciaCtrl, obtenerAmbulanciasCercanasCtrl } = require('../controllers/ambulanciasCtrl')

router.get('/', obtenerAmbulanciasCtrl);

router.post('/', crearAmbulanciaCtrl);

router.post('/cercanas', obtenerAmbulanciasCercanasCtrl);

module.exports = router 