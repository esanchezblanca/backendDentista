  
const router = require('express').Router();
const CustomerController = require('../controllers/customerController');


router.post('/register', CustomerController.register);

// router.login('/login', CustomerController.login);

// router.logout('/logout', CustomerController.logout);

router.delete('/delete', CustomerController.delete);

router.get('/findId/:id', CustomerController.findId);

router.get('/findAll', CustomerController.findAll);

module.exports = router;