const express = require ('express')
const app = express ();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

require('./connection/mongoconn') 
const PORT = 3001;

const ambulanciasRoutes = require('./routes/ambulanciaRoutes')
app.use('/ambulancias', ambulanciasRoutes);

app.listen(PORT, ( ) => {
    console.log(`Server running on port ${PORT}`);

})