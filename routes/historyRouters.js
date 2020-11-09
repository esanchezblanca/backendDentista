const router = require('express').Router();
const HistoryController = require('../controllers/historyController');
const adminToken = require('../middlewares/admin.js');


//Al apartado del historial solo pueden acceder los administradores
router.post('/create', adminToken.adminMiddleware, HistoryController.create);

router.delete('/delete',adminToken.adminMiddleware, HistoryController.delete);

router.get('/showId/:id',adminToken.adminMiddleware, HistoryController.showId);

router.get('/showAll',adminToken.adminMiddleware, HistoryController.showAll);

module.exports = router;