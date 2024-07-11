var express = require('express');
let sessionController = require('../controller/session')
let userController = require('../controller/user')
var router = express.Router();

router.post('/add',userController.sequre,sessionController.AddSession);
router.get('/',userController.sequre,sessionController.ViewSession);
router.patch('/:id',userController.sequre,sessionController.UpdataSession);
router.delete('/:id',userController.sequre,sessionController.DeleteSession);

module.exports = router;
