const AmbulanciaModel = require('../models/ambulanciaModel');
const latLong = require('latitude-longitude')

const obtenerAmbulanciasService = async (filter) => {
    let query = {};
    const ambulancias = await AmbulanciaModel.find(query)
    return {
        response: { ambulancias },
        httpStatus: 200
    }
}

const crearAmbulanciaService = async (ambulanciaData) => {
    try {
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

const obtenerAmbulanciasCercanasService = async (lat_Siniestro, long_Siniestro) => {
    var ambulanciasCercanas = [];
    const ambulancias = await AmbulanciaModel.find({})

    for (let i = 0; i < ambulancias.length; i++) {
        const lat_ambulancia = ambulancias[i].ubicacion_latitud;
        const long_ambulancia = ambulancias[i].ubicacion_longitud;
        const distancia = latLong.getDistance([lat_Siniestro, long_Siniestro], [lat_ambulancia, long_ambulancia])

        ambulanciasCercanas.push({
            "placa": ambulancias[i].placa,
            "distancia": distancia,
        })

        ambulanciasCercanas.sort(function (a, b) {
            return (a.distancia - b.distancia)
        })
    }
    return {
        response: { ambulanciasCercanas },
        httpStatus: 200
    }
}

module.exports = {
    obtenerAmbulanciasService,
    crearAmbulanciaService,
    obtenerAmbulanciasCercanasService
}