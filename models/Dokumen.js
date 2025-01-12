"use strict";

module.exports = (sequelize, DataTypes) => {
  const Dokumen = sequelize.define(
    "Dokumen",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fileKK: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileSKHUN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileAktaKelahiran: {
        type: DataTypes.STRING,
      },
      fileKIP: {
        type: DataTypes.STRING,
      },
      fileSertifikat: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("NOW"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("NOW"),
      },
    },
    {
      tableName: "dokumen", // Menggunakan nama tabel sesuai dengan database
      timestamps: true,
    }
  );

  Dokumen.associate = function (models) {
    Dokumen.hasOne(models.Pendaftaran, {
      as: "Pendaftaran",
      foreignKey: "id_dokumen",
    });
  };

  return Dokumen;
};
