'use strict';

/*
  titulo: Sequelize.STRING(100),
	descricao: Sequelize.STRING(300),
	ordem: Sequelize.INTEGER,
	url: Sequelize.STRING(100)
*/

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable("video", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		titulo: Sequelize.STRING(100),
		descricao: Sequelize.STRING(300),
		ordem: Sequelize.INTEGER,
		url: Sequelize.STRING(100),
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	}),

	down: (queryInterface) => queryInterface.dropTable("video")
};
