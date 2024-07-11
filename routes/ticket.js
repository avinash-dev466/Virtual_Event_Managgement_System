var express = require('express');
let ticketController = require('../controller/ticket')
let userController = require('../controller/user')
var router = express.Router();

router.post('/create',userController.sequre,ticketController.createTicket);
router.get('/',userController.sequre,ticketController.viewTicket);
router.patch('/:id',userController.sequre,ticketController.UpdataTicket);
router.delete('/:id',userController.sequre,ticketController.DeleteTicket);

module.exports = router;
