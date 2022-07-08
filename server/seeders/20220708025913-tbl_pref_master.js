'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tbl_pref_master', [{
      preferenceName:'C'
    },{
      preferenceName:'C++'
    },{
      preferenceName:'VB 5'
    },{
      preferenceName:'VB 6'
    },{
      preferenceName:'Visual Studio.net'
    },{
      preferenceName:'ASP'
    },{
      preferenceName:'ASP.net'
    },{
      preferenceName:'C#'
    },{
      preferenceName:'Oracle'
    },{
      preferenceName:'PHP'
    },{
      preferenceName:'Java'
    },{
      preferenceName:'SQL Server'
    },{
      preferenceName:'MySQL'
    },{
      preferenceName:'Sybase'
    },{
      preferenceName:'JSP'
    },{
      preferenceName:'PERL'
    },{
      preferenceName:'Python'
    },{
      preferenceName:'Cold Fusion'
    },{
      preferenceName:'Windows'
    },{
      preferenceName:'Linux'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tbl_pref_master', null, {});
  }
};
