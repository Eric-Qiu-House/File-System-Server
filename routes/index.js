const express = require('express');
const router = express.Router();

const imgFolder = require('./file-folder-route');
const imgInfo = require('./file-info-route');
const fileTransfer = require('./file-transfer-route');

const defaultRoutes = [
  {
    path: '/imgFolder',
    route: imgFolder,
  },
  {
    path: '/imgInfo',
    route: imgInfo,
  },
  {
    path: '/fileTransfer',
    route: fileTransfer,
  }
];

// 拼接路由
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;