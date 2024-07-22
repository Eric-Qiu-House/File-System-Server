const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const fileServer = require('./routes');

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件中间件，用于提供图片
app.use('/images', express.static(path.join(__dirname, 'public')));

// 路由
app.use('/fileServer', fileServer);

// 启动应用程序
app.listen(3001, function () {
  console.log("服务启动,端口号3001");
});
