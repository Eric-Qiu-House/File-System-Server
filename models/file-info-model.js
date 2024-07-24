const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const sequelizePaginate = require('sequelize-paginate');

class FileInfoMod extends Model { }


FileInfoMod.init( {
  file_id_: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  file_name_: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_path_: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file_size_: {
    type: DataTypes.INTEGER
  },
  upload_time_: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  delete_time_: {
    type: DataTypes.DATE,
    allowNull: true
  },
  file_type_: {
    type: DataTypes.STRING
  },
  description_: {
    type: DataTypes.STRING
  }
}, {
  sequelize,  //指定连接的数据库实例
  tableName: 'files_info',    //表名称
  modelName: 'FileInfoMod',  //模型的名称
  timestamps: false // 禁用 Sequelize 自动生成的 createdAt 和 updatedAt 字段
});

// 应用分页插件
sequelizePaginate.paginate(FileInfoMod);

module.exports = FileInfoMod;
