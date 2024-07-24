const ImgInfoMod = require('../models/file-info-model');
const sequelizePaginate = require('sequelize-paginate');
sequelizePaginate.paginate(ImgInfoMod);
//全部
async function findTable() {
  try {

    const options = {
      page: 1, // 当前页码
      paginate: 20 , // 每页显示的条目数
      // where: {}, // 查询条件
      // order: [['file_id_','DESC']], // 排序方式
      // logging: console.log // 启用日志记录以查看生成的 SQL 查询
    };
    const data = await ImgInfoMod.paginate(options)

    // const data = await ImgInfoMod.findAll(
    //   // {
    //     //   attributes: ['id_', 'file_name_', 'file_path_', 'release_time_', 'release_name_', 'status_', 'update_time_', 'updater_']
    //   // }
    // );
    if (data.length > 0) {
      return data;
    } else {
      console.log('No found');
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

/**
 * 获取文件信息的分页数据
 * @param {number} page - 当前页码，默认1
 * @param {number} pageSize - 每页显示的条目数，默认10
 * @param {Object} filters - 查询条件对象（可选）
 * @returns {Object} - 包含分页数据的对象
 */