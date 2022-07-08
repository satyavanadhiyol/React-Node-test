'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_preferences extends Model {
    static associate(models) {
      tbl_preferences.belongsTo(models.tbl_user, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });
      tbl_preferences.belongsTo(models.tbl_user, {
        foreignKey: 'preferenceId',
        as: 'preferencemaster',
        onDelete: 'CASCADE',
      });
    }
  }
  tbl_preferences.init({
    prefId: DataTypes.NUMBER,
    userId: DataTypes.STRING(50),
    preferenceId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'tbl_preferences',
  });
  return tbl_preferences;
};