const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class FileFolderMod extends Model { }

FileFolderMod.init({
    id_: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    folder_name_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    folder_num_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file_path_: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,  //指定连接的数据库实例
    tableName: 'file_folder',
    modelName: 'FileFolderMod',  //模型的名称
    timestamps: false // 禁用 Sequelize 自动生成的 createdAt 和 updatedAt 字段
});

module.exports = FileFolderMod;
