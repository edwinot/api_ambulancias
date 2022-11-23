const express = require ('express')
const app = express ();
require('./connection/mongoconn') 
const PORT = 3001;

const ambulanciasRoutes = require('./routes/ambulanciaRoutes')
app.use('/ambulancias', ambulanciasRoutes);

app.listen(PORT, ( ) => {
    console.log(`Server running on port ${PORT}`);

})