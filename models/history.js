'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    

    static associate(models) {
      this.belongsTo(models.Customer);
    }
  };
  History.init({
    CustomerId: DataTypes.STRING,
    allergies: DataTypes.STRING,
    comments: DataTypes.STRING,
    smoker: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};