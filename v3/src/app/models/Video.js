import Sequelize, { Model } from "sequelize";

class Video extends Model {
	static init(sequelize) {
		super.init(
			{
				titulo: Sequelize.STRING(100),
				descricao: Sequelize.STRING(300),
				ordem: Sequelize.INTEGER,
				url: Sequelize.STRING(100)
			},
			{
				sequelize,
				tableName: 'video',
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Curso, {
			foreignKey: 'curso_id',
			as: 'curso',

		});
	}
}

export default Video;