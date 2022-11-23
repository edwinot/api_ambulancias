const {obtenerAmbulanciasService} = require('../services/ambulanciasService')

const obtenerAmbulanciasCtrl = async (req, res) => {
    const filter = req.query;
    const {response, httpStatus} = await obtenerAmbulanciasService(filter); 
    res.status(httpStatus).json(response) 
}

module.exports = {
    obtenerAmbulanciasCtrl
}