'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rout extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Review, { foreignKey: 'routId' });
      this.hasMany(models.Rating, { foreignKey: 'routId' });
    }
  }
  Rout.init(
    {
      userId: DataTypes.INTEGER,
      routName: DataTypes.STRING,
      location: DataTypes.STRING,
      mapData: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      modelName: 'Rout',
    }
  );
  return Rout;
};
