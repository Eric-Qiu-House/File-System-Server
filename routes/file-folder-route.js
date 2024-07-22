const express = require('express');
const router = express.Router();
const imgFolderControllers = require('../controllers/file-folder-controllers'); 

// 文件夹
router.get('/inquireList',imgFolderControllers.inquireList)

module.exports = router;