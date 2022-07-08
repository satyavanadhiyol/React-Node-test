'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_pref_master extends Model {
    static associate(models) {
    }
  }
  tbl_pref_master.init({
    preferenceId: DataTypes.NUMBER,
    preferenceName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_pref_master',
  });
  return tbl_pref_master;
};