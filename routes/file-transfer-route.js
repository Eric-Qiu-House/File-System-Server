const express = require('express');
const router = express.Router();
const fileTransfer = require('../controllers/file-transfer-controller');
const setupMulter = require('../middle/multerSetup')
const imgInfoControllers = require('../controllers/file-info-controllers'); 

// 上传
router.post('/upload', setupMulter().single('file'), imgInfoControllers.createImgInfo);

// 下载
router.get('/downloadImg', fileTransfer.downloadImg); 

module.exports = router;
