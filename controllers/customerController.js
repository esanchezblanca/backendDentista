const {
    Customer
} = require('../models/customer');


const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dentistOffice',
    password: '1234'
});

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const CustomerController = {
    
    async register(req,res) {
        try {
            const db = await conex;
            const [appointments] = await db.execute(`SELECT * FROM appointments`);
            //console.log(appointments)
            res.send({
                appointments
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Ha habido un problema consultando las citas'
            });
        }
    },

    async login(req, res) {
    //     let user = await User.exists({'mail': req.body.mail})
    //     let password = await User.exists({'mail': req.body.mail,'password':req.body.password})
         
        
    //     if ( user && password) {
    //          const payload = {
    //              check: true
    //          };
    //          const token = jwt.sign(payload, config.key, {
    //              expiresIn: 1440
    //          });
    //          res.json({
    //              mensaje: 'Autenticación correcta',
    //              token: token
    //          });
    //      } else {
    //          res.json({ mensaje: "Datos incorrectos" }) 
    //      }
    },

    async logout(req,res){

    },

    async delete(req,res){

    },

    async modify(req,res){

    },

    async findId(req,res){
        
    }

}

module.exports = UserController;