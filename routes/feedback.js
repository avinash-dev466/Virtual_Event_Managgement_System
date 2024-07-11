var express = require('express');
let feedbackController = require('../controller/feedback')
var router = express.Router();

router.post('/create',feedbackController.AddFeedback);
router.get('/',feedbackController.ViewFeedback);


module.exports = router;
