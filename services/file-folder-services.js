const FileFolderMod = require('../models/file-folder-model');

//全部
async function findTable() {
  try {
    const data = await FileFolderMod.findAll(
      // {
        // attributes: ['id_', 'title_', 'visit_num_', 'release_time_', 'release_name_', 'status_', 'update_time_', 'updater_']
      // }
    );
    if (data.length > 0) {
      return data;
    } else {
      console.log('No users found');
      return [];
    }
  } catch (error) {
    console.error('Error finding users:', error);
    throw error;
  }
}
// 指定
async function whereNewsId(req) {
  try {
    const { id_ } = req.body;
    console.log(req.body, 'iddddddddddddddddd')
    const data = await FileFolderMod.findOne({ where: { id_ } })
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
// 更新-新闻状态
async function updateNewsStatus(req) {
  try {
    console.log(req.body, 'reqreqreqreq')
    const { id_, newData } = req.body
    // const newData = {
    //   status_: 0,
    //   title_: '123456'
    // }
    console.log(id_, newData, 'ssssssssssssss')
    const data = await ImgFolderMod.findByPk(id_);
    if (data) {
      await data.update(newData, { fields: Object.keys(newData) });
      return data;
    } else {
      console.log('data not found');
      return null;
    }
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}
// 新增
async function createNews(req) {
  try {
    const { title_, content_, } = req.body;
    const id_ = global.uuid1()
    const data = await ImgFolderMod.create({ id_, title_, content_ })
    return data;
  } catch (error) {
    console.error('Error finding users:', error);
    throw error;
  }
}
module.exports = {
  findTable,
  // whereNewsId,
  // updateNewsStatus,
  // createNews
}