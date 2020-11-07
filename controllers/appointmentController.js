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

    },

    async showPending(req,res){

    }
};

module.exports = AppointmentController;