const {History, sequelize} = require('../models/index.js');


 //faltan los middlewares

const HistoryController = {
    
    async create(req,res){ 
        try{
            const history = await History.create({
                id: req.body.history,
                CustomerId: req.body.CustomerId,
                allergies: req.body.allergies,
                comments: req.body.comments,
                smoker: req.body.smoker,
            });

            res.send({
                message: 'History successfully created'
            })

        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'History could not be created'
            })
        }
    },          

    async delete(req,res){
        try {
            const historyId = await History.destroy({
                where: {
                    id: req.body.id
                }
            })
            if (!historyId) {
                return res.status(400).send({
                    message: 'History could not be removed'
                })
            }
            res.send({
                message: 'History successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the history'
            })
        }
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
        let idHistory = req.params.id;

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