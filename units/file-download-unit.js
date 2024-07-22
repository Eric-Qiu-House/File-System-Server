const express = require('express');
const path = require('path');
const fs = require('fs');

// 路由处理文件下载
const download = async (file_id_, file_name_, file_path_) => {
    const filename = file_id_;
    // 示例中假设文件存储在 public/uploads 目录下
    const uploadsDir = path.join(__dirname, 'public', file_path_);
    const filePath = path.join(uploadsDir, filename);
    // 检查文件是否存在
    if (fs.existsSync(filePath)) {
        // 设置响应头，指定文件类型和下载时的文件名
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${file_name_}"`);

        // 创建文件可读流并发送到响应
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
}

express.default = {
    download
}


