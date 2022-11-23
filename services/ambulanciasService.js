const AmbulanciaModel = require('../models/ambulanciaModel')

const obtenerAmbulanciasService = async (filter) => {
    let query = {};
    //query.sort({});
    //if (filter) query = {placa: { $regex: filter, $options: 'i'}};
    
    const ambulancias = await AmbulanciaModel.find(query)
    return {
        response: {ambulancias},
        httpStatus: 200
    }
}

module.exports = {
    obtenerAmbulanciasService
}