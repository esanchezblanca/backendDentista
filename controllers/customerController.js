const {Customer, sequelize} = require('../models/index.js');


// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const customerController = {

    async register(req, res) {
        try {
            const db = await conex;
            const [customers] = await db.execute(`SELECT * FROM customers`);
            //console.log(appointments)
            res.send({
                customers
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Ha habido un problema consultando las citas'
            });
        }
    },

    // async login(req, res) {
    // let user = await User.exists({'mail': req.body.mail})
    // let password = await User.exists({'mail': req.body.mail,'password':req.body.password})


    // if ( user && password) {
    //        const payload = {
    //         check: true
    //          };
    //           const token = jwt.sign(payload, config.key, {
    //            expiresIn: 1440
    //         });
    //          res.json({
    //               mensaje: 'Autenticación correcta',
    //             token: token
    //        });
    //    } else {
    //         res.json({ mensaje: "Datos incorrectos" }) 
    //     }
    // },

    // async logout(req,res){

    // },

    async delete(req, res) {
      
        try {
            const mail = await Customer.destroy({
                where: {
                    mail: req.body.mail
                }
            })
            if (!mail) {
                return res.status(400).send({
                    message: 'The account could not be removed. Please check mail'
                })
            }
            res.send({
                message: 'Account successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the account'
            })
        }
    },

    async findId(req, res) {
        let idCustomer = req.params.id;
        sequelize.query(`SELECT * from customers WHERE id = ${idCustomer}`)
            .then(customer => res.send(customer))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Could not find customer'
                })
            })
    },

    async findAll(req, res) {
        sequelize.query(`SELECT * from customers`)
            .then(customer => res.send(customer))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Could not find customer'
                })
            })
    },
}

module.exports = customerController;