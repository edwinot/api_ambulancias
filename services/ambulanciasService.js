const AmbulanciaModel = require('../models/ambulanciaModel')

const obtenerAmbulanciasService = async (filter) => {
    let query = {};
    const ambulancias = await AmbulanciaModel.find(query)
    return {
        response: {ambulancias},
        httpStatus: 200
    }
}

const crearAmbulanciaService = async (ambulanciaData) => {
    try{
    const ambulancia = AmbulanciaModel(ambulanciaData);
    await ambulancia.save();
    return {
        response: ambulancia,
        httpStatus: 201
        };
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500
        }
    }
}

module.exports = {
    obtenerAmbulanciasService,
    crearAmbulanciaService
}