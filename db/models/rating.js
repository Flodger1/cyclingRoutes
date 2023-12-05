'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Rout, { foreignKey: 'routId' })
    }
  }
  Rating.init({
    routId: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};