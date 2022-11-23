const express = require('express');
const router = express.Router();            
const {obtenerAmbulanciasCtrl} = require('../controllers/ambulanciasCtrl')

router.get('/', obtenerAmbulanciasCtrl);  





module.exports = router 