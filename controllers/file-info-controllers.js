const fileInfoServices = require('../services/file-info-services')

// 全部文件信息
const inquireList = async (req, res) => {
    try {
        const data = await fileInfoServices.findTable()
        res.status(201).json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// 查询文件列表-文件夹下
const whereFileLift = async (req,res) => {
    try{
        const data = await fileInfoServices.whereFilePath(req)
        res.status(201).json(data)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// 插入文件信息
const createImgInfo = async (req, res) => {
    try {
        const data = await fileInfoServices.create(req); 
        return res.status(200).json(data);
    } catch (err) {
        console.error('Error creating category:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    inquireList,
    whereFileLift,
    createImgInfo
};