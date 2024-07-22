const fs = require('fs');
const path = require('path');
const File = require('../models/file-info-model');

// 图片下载
const downloadImg = async (req, res) => {
  try {
    const info = req.query
    const filePath = path.join(__dirname, '..', 'public', info.file_path_, `${info.file_id_}.${info.file_type_}`); // 获取文件完整路径

    fs.stat(filePath, (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          return res.status(404).json({ message: `File ${filePath} does not exist` });
        }
        console.error(`Error retrieving file ${filePath}: ${err.message}`);
        return;
      }
      // 文件存在，可以继续操作
      res.download(filePath, info.file_name_); // 发送文件给客户端下载
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// 文件下载
const downloadFile = async (req, res) => {
  try {
    const fileId = req.params.fileId; // 获取文件ID，可以从路由参数或者请求体中获取

    // 根据 fileId 查询文件信息，获取文件路径等信息
    const file = await File.findByPk(fileId);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = path.join(__dirname, '..', file.file_path); // 获取文件完整路径

    res.download(filePath, file.file_name_); // 发送文件给客户端下载
  } catch (error) {
    console.error('Error downloading file:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// 获取文件列表
const getFileList = async (req, res) => {
  try {
    const files = await File.findAll({ where: { delete_time: null } }); // 查询未删除的文件列表
    return res.status(200).json(files);
  } catch (error) {
    console.error('Error getting file list:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  downloadFile,
  getFileList,
  downloadImg
};
