'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_user extends Model {
    static associate(models) {
    }
  }
  tbl_user.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userName: DataTypes.STRING(20),
    password: DataTypes.STRING(20),
    emailAddress: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'tbl_user',
  });
  return tbl_user;
};