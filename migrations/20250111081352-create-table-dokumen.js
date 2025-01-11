"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dokumen", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fileKK: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileSKHUN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileAktaKelahiran: {
        type: Sequelize.STRING,
      },
      fileKIP: {
        type: Sequelize.STRING,
      },
      fileSertifikat: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dokumen");
  },
};
