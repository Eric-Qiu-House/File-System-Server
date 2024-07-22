const ImgInfoMod = require('../models/file-info-model');

//全部
async function findTable() {
  try {
    const data = await ImgInfoMod.findAll(
      // {
        //   attributes: ['id_', 'file_name_', 'file_path_', 'release_time_', 'release_name_', 'status_', 'update_time_', 'updater_']
      // }
    );
    if (data.length > 0) {
      return data;
    } else {
      console.log('No users found');
      return [];
    }
  } catch (error) {
    console.error('Error finding :', error);
    throw error;
  }
}
// 新增图片信息
async function create(req) {
  try {
    console.log( req.body,req.file,' req.body-------------------')
    const { file_path_ } = req.body;
    const { fieldname: file_id_, originalname: file_name_, ext: file_type_, size: file_size_ } = req.file
    const data = await ImgInfoMod.create({ file_id_, file_name_, file_type_, file_path_, file_size_ })
    return data;
  } catch (error) {
    console.error('Error finding :', error);
    throw error;
  }
}
// 指定
async function whereFilePath(req) {
  try {
    const { file_path_ } = req.body;
    const data = await ImgInfoMod.findAll({ where: { file_path_ } })
    if (data) {
      console.log('Found user:', data);
      return data
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}

module.exports = {
  findTable,
  create,
  whereFilePath
  // whereNewsId,
  // updateNewsStatus,
  // create
}