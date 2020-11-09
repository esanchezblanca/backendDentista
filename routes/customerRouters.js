const router = require('express').Router();
const CustomerController = require('../controllers/customerController');
const adminToken = require('../middlewares/admin.js');
const usersToken = require('../middlewares/auth.js');



router.post('/register', usersToken.tokenMiddle, CustomerController.register);

router.post('/login', CustomerController.login);

// router.logout('/logout', CustomerController.logout);

//Solo los admin pueden eliminar las fichas de los clientes
router.delete('/delete', adminToken.adminMiddleware, CustomerController.delete);


//Solo el admin puede sacar una lista de todos los clientes o por su id
router.get('/findId/:id', adminToken.adminMiddleware, CustomerController.findId);

router.get('/findAll', adminToken.adminMiddleware, CustomerController.findAll);

module.exports = router;