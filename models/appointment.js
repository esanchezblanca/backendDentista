'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
   
    static associate(models) {
      this.belongsTo(models.Customer);
    }
  };
  Appointment.init({
    CustomerId: DataTypes.STRING,
    day: DataTypes.DATE,
    time: DataTypes.DATE,
    room: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    paid: DataTypes.BOOLEAN,
    treatment: DataTypes.STRING,
    remarks: DataTypes.STRING,
    status: DataTypes.ENUM('Open', 'OnProgress', 'Cancelled')
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};