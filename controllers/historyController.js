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

    },

    async showId(req,res){

    }
};

module.exports = HistoryController;