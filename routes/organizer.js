var express = require('express');
let organizerController = require('../controller/organizer')
var router = express.Router();

/* GET users listing. */
router.post('/create',organizerController.registerOrganizer);
router.post('/Login',organizerController.OrganizerLogin);

module.exports = router;
