const {Appointment, sequelize} = require('../models/index.js');


const AppointmentController = {
    
    async create(req,res){
        try{
            const appointment = await Appointment.create({
               CustomerId: req.body.CustomerId,
               day: req.body.day,
               time: req.body.time,
               room: req.body.room,
               price: req.body.price,
               paid: req.body.paid,
               treatment: req.body.treatment,
               remarks: req.body.remarks,
               status: req.body.status
            });

            res.send({
                message: 'Appointment successfully created'
            })

        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Appointment could not be created'
            })
        }
    },

    async modify(req,res){

    },

    async delete(req,res){
        try {
            const appointmentId = await Appointment.destroy({
                where: {
                    id: req.body.id
                }
            })
            if (!appointmentId) {
                return res.status(400).send({
                    message: 'Appointment could not be removed'
                })
            }
            res.send({
                message: 'Appointment successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the appointment'
            })
        }
    },

    async showAll(req,res){
        Appointment.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Cannot show appointments'
                })
            })
    },

    async showPending(req,res){

    }
}

module.exports = AppointmentController;