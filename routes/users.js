var express = require('express');
let userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */
router.post('/participantcreate',userController.registerParticipant);
router.post('/ParticipantLogin',userController.ParticipantLogin);
router.get('/',userController.sequre,userController.AllParticipantData);
router.patch('/:id',userController.sequre,userController.ParticipantUpdata);

module.exports = router;
