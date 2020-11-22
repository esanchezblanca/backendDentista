const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');
const adminToken = require('../middlewares/admin.js');
const usersToken = require('../middlewares/auth.js');

//Todos los usuarios pueden crear y eliminar citas
router.post('/create', AppointmentController.create);

router.delete('/delete', AppointmentController.delete);


//Todos los usuarios pueden acceder al listado de citas pendientes
router.get('/showPending/:id', AppointmentController.showPending);


//Solo los admin pueden mostrar todo el registro de citas pendientes y pasadas
router.get('/showAll', AppointmentController.showAll); 

module.exports = router;