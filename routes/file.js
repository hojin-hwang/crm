var express = require('express');
var router = express.Router();

const fileController = require('../controllers/fileController');
const LoginRequired = require('../utils/loginRequired');

router.post('/add', LoginRequired.messageIfNotLogin, fileController.uploadFile);
router.post('/delete', LoginRequired.messageIfNotLogin, fileController.deleteFile);
router.post('/list', LoginRequired.messageIfNotLogin, fileController.list);
router.post('/size', LoginRequired.messageIfNotLogin, fileController.totalSize);
module.exports = router; 
