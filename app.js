const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;


const customerRouter = require('./routes/customerRouters');
// const appointmentRouter = require('./routes/appointmentRouters');
const historyRouter = require('./routes/historyRouters');




const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'dentistOffice',
    password: '1234'
})
    //PARA VER SI ESTAMOS CONECTADOS A LA BD
.then(() => console.log('Sequelize connected'))
.catch((error) => console.log('Error Sequelize connection', error));



app.use(express.json()); //para evitar que el req.body sea undefined

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});


//Enrutados
app.use('/customers', customerRouter);
app.use('/history', historyRouter);
// app.use('/appointments', appointmentRouter);


app.listen(PORT, () => console.log(`Server working on ${PORT} port`));