'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_preferences', {
      prefId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING(50),
        references: {
          model: {
            tableName: 'tbl_user',
          },
          key: 'id',
        },
        allowNull: false,
      },
      preferenceId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tbl_pref_master',
          },
          key: 'preferenceId',
        },
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_preferences');
  }
};