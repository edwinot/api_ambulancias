const {obtenerAmbulanciasService, crearAmbulanciaService} = require('../services/ambulanciasService')

const obtenerAmbulanciasCtrl = async (req, res) => {
    const filter = req.query;
    const {response, httpStatus} = await obtenerAmbulanciasService(filter); 
    res.status(httpStatus).json(response) 
}


const crearAmbulanciaCtrl = async (req, res) => {
    const ambulancia = req.body;
    
    const {response, httpStatus} = await crearAmbulanciaService(ambulancia);
    res.status(httpStatus).json(response)
}

module.exports = {
    obtenerAmbulanciasCtrl,
    crearAmbulanciaCtrl
}