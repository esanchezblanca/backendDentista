const {
    History
} = require('../models/history');


const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dentistOffice',
    password: '1234'
});


 //faltan los middlewares

const HistoryController = {
    
    async create(req,res){

    },

    async modify(req,res){

    },

    async delete(req,res){
        
    },

    async showAll(req,res){
        sequelize.query(`SELECT * from histories`)
            .then(history => res.send(history))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'History not found'
                })
            })
    },

    async showId(req,res){
        let historyId = req.body.id;

        sequelize.query(`SELECT * from histories WHERE id = ${idHistory}`)
            .then(history => res.send(history))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'History not found'
                })
            })
        }

    };

module.exports = HistoryController;