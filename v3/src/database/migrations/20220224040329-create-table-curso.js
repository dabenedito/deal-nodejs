'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("curso", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      allowNull:false
    },
    nome: {
      type: Sequelize.STRING(100),
    },
    duracao: Sequelize.STRING(100),
    dataPublicacao: Sequelize.DATE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }),

  down: (queryInterface) => queryInterface.dropTable("curso")
};
