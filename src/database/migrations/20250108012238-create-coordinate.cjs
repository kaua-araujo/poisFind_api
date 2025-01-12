'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coordinates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID, // Definindo o tipo como UUID
        defaultValue: Sequelize.UUIDV4 // Definindo um valor padrão usando UUIDV4
      },
      title: {
        type: Sequelize.STRING
      },
      x: {
        type: Sequelize.INTEGER
      },
      y: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coordinates');
  }
};