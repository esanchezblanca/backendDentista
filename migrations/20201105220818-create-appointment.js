'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerId: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.DATE
      },
      room: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      treatment: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('Open', 'OnProgress', 'Cancelled')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};