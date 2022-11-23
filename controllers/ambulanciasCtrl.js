const { obtenerAmbulanciasService, crearAmbulanciaService, obtenerAmbulanciasCercanasService } = require('../services/ambulanciasService')

const obtenerAmbulanciasCtrl = async (req, res) => {
    const filter = req.query;
    const { response, httpStatus } = await obtenerAmbulanciasService(filter);
    res.status(httpStatus).json(response)
}


const crearAmbulanciaCtrl = async (req, res) => {
    const ambulancia = req.body;

    const { response, httpStatus } = await crearAmbulanciaService(ambulancia);
    res.status(httpStatus).json(response)
}

const obtenerAmbulanciasCercanasCtrl = async (req, res) => {
    const lat_Siniestro = req.body.latitudSiniestro
    const long_Siniestro = req.body.longitudSiniestro;
    const {response, httpStatus} = await obtenerAmbulanciasCercanasService(lat_Siniestro, long_Siniestro); 
    res.status(httpStatus).json(response)
}



module.exports = {
    obtenerAmbulanciasCtrl,
    crearAmbulanciaCtrl,
    obtenerAmbulanciasCercanasCtrl
}