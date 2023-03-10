const express = require('express');
const app = express();
const PORT = 3000;

//VIEWS
app.set('view engine','ejs'); //Se fija ejs como el motor para las vistas


//Rutas de las vistas web
app.use('/', require('./routes/rutas_web'))

//Rutas de los productos
app.use('/productos',require('./routes/rutas_productos'))

//Listen port
app.listen(PORT , ()=> console.log('listening on port',PORT));