const {
    Appointment
} = require('../models/appointment');


const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dentistOffice',
    password: '1234'
});

const AppointmentController = {
    async create(req,res){

    },

    async modify(req,res){

    },

    async delete(req,res){

    },

    async showAll(req,res){
        Appointment.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar los users'
                })
            })
    },

    async showPending(req,res){

    }
}

module.exports = AppointmentController;