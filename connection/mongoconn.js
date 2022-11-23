const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/db_gestionAmbulancias";
const conn = async () => {
    await mongoose.connect(uri);
    console.log('Conection mongo running...')
}

conn().catch(error => console.log('error connecting mongo', error));