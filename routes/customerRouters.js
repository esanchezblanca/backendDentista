const router = require('express').Router();
const CustomerController = require('../controllers/customerController');
const adminToken = require('../middlewares/admin.js');
const usersToken = require('../middlewares/auth.js');



router.post('/register', CustomerController.register);

router.post('/login', CustomerController.login);

// router.logout('/logout', CustomerController.logout);

//Solo los admin pueden eliminar las fichas de los clientes
router.delete('/delete', CustomerController.delete);


//Solo el admin puede sacar una lista de todos los clientes o por su id
router.get('/findId/:id', CustomerController.findId);

router.get('/findAll', CustomerController.findAll);

module.exports = router;