const router = require('express').Router();
const HistoryController = require('../controllers/historyController');



router.post('/create', HistoryController.create);

router.delete('/delete', HistoryController.delete);

router.get('/showId/:id', HistoryController.showId);

router.get('/showAll', HistoryController.showAll);

router.put('/modify', HistoryController.modify);

module.exports = router;