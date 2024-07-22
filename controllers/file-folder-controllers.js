const fileFolderServices = require('../services/file-folder-services')

// 查询文件夹
const inquireList = async (req,res)=> {
    try {
        const data = await fileFolderServices.findTable()
        res.status(201).json(data);

    }catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    inquireList,
  };