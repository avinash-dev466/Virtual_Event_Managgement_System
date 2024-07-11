var express = require('express');
let eventController = require('../controller/event')
let userController = require('../controller/user')
var router = express.Router();

router.post('/create',userController.sequre,eventController.createEvent);
router.get('/',userController.sequre,eventController.viewEvent);
router.patch('/:id',userController.sequre,eventController.UpdataEvent);
router.delete('/:id',userController.sequre,eventController.DeleteEvent);

module.exports = router;
