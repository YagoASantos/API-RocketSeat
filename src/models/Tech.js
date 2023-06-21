const { Model, DataTypes} = require('sequelize');

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Tech, { foreignKey: 'tech_id', through: 'user_techs', as: 'techs' });
  }
}

module.exports = Tech;