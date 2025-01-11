"use strict";

module.exports = (sequelize, DataTypes) => {
  const Dokumen = sequelize.define("Dokumen", {
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
  });

  Dokumen.associate = function (models) {
    Dokumen.hasMany(models.Pendaftaran, {
      as: "Pendaftaran",
      foreignKey: "dokumen_id",
    });
  };

  return Dokumen;
};
