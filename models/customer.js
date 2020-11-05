'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    
    static associate(models) {
      this.hasMany(models.Appointment);
      this.hasOne(models.History);
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    birthDay: DataTypes.DATE,
    eBilling: DataTypes.BOOLEAN,
    DNI: DataTypes.STRING,
    remarks: DataTypes.STRING,
    role: DataTypes.ENUM('Admin', 'Guest')
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};