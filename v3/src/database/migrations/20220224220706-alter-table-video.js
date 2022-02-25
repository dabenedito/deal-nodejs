'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.addColumn('video', 'curso_id', {
		type: Sequelize.INTEGER,
		references: { model: 'curso', key: 'id' },
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
		allowNull: true,
	}),

	down: (queryInterface) => queryInterface.removeColumn('video', 'curso_id')
};