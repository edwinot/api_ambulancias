const mongoose = require('mongoose');
const {Schema} = mongoose;

const AmbulanciaSchema = new Schema(
    {
        placa: {
            type:String,
            unique: true,
            required: true
        },
        zona: String,
        status: String,
        ubicacion_latitud: Number,
        ubicacion_longitud: Number,
    },
    {
        timestamps: true   
    }
);

const  Ambulancia = mongoose.model("ambulancias", AmbulanciaSchema ) ;      

module.exports = Ambulancia;