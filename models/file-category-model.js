const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const FileCategory = sequelize.define('FileCategory', {
  category_id_: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true
  },
  category_name_: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_description_: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'file_categories_',
  timestamps: false // 禁用 Sequelize 自动生成的 createdAt 和 updatedAt 字段
});

module.exports = FileCategory;
