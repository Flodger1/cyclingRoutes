'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Rout, {
        foreignKey: 'userId',
<<<<<<< HEAD
      });
=======
      })
>>>>>>> b71029ecd21b922d75cf7727b6647a7e47d3292f
      this.hasMany(models.Review, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
