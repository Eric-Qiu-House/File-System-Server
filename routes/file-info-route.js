const express = require('express');
const router = express.Router();
const imgInfoControllers = require('../controllers/file-info-controllers'); 

router.get('/inquireList',imgInfoControllers.inquireList)
router.post('/whereFileCatalog',imgInfoControllers.whereFileLift)


module.exports = router;