'use strict';

module.exports = {
	up: ( queryInterface, Sequelize ) => queryInterface.createTable('cursos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},

		nome: {
			type: Sequelize.STRING(100),
			allowNull: false,
		},

		duracao: {
			type: Sequelize.STRING(100),
			allowNull: true,
		},

		dataPublicacao: {
			type: Sequelize.DATE,
		},

		created_at: {
			type: Sequelize.DATE,
			allowNull: false,
			default: new Date(),
		},

		deleted_at: {
			type: Sequelize.DATE,
			allowNull: true,
		},

		updated_at: {
			type: Sequelize.DATE,
			allowNull: true,
		}
	}),

	down: ( queryInterface, Sequelize ) => queryInterface.dropTable('cursos')
};
