const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const cors = require ('cors');
const PORT = process.env.PORT || 3200;

const customerRouter = require('./routes/customerRouters');
const appointmentRouter = require('./routes/appointmentRouters');
const historyRouter = require('./routes/historyRouters');



//Creamos la constante que enlaza con server bbdd
const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'dentistOffice',
    password: '1234'
})

//Aquí compuebo si estoy conectada a la base de datos:
.then(() => console.log('Sequelize connected'))
.catch((error) => console.log('Error Sequelize connection', error));



app.use(express.json()); 


//Hace que no de error el cors
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Enrutados
app.use('/customers', customerRouter);
app.use('/history', historyRouter);
app.use('/appointment', appointmentRouter);


//Llamada al puerto para abrir el servidor y mensaje de que está funcionando
app.listen(PORT, () => console.log(`Server working on ${PORT} port`));