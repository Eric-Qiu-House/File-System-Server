// multerSetup.js

const multer = require('multer');
const path = require('path');
const uuid = require('uuid'); // 导入 uuid 库

// 函数：配置并返回 multer 实例
function setupMulter() {
  try {
    // 配置 Multer 中间件 
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log(req.body,'--------------------------------------------')
        const paths = 'public/' + req.body.file_path_ + '/'
        cb(null, paths);
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = uuid.v4(); // 使用 uuid.v4() 生成唯一的 UUID
        file.fieldname = uniqueSuffix; // 将生成的 ID 添加到 req.file 中

        const ext = path.extname(file.originalname); // 获取原始文件的扩展名
        file.ext = ext
        console.log(file,'filefile')
        cb(null, uniqueSuffix + ext); // 设置文件名为 UUID + 扩展名
      }
    });

    return multer({ storage: storage });
  } catch (err) {
    // 捕获并处理配置过程中的错误
    console.error('Error setting up multer:', err);
    throw err; // 抛出错误以便更高层次的代码可以处理
  }
}

module.exports = setupMulter;
