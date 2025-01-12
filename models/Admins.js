// models/admin.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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

  Admin.associate = (models) => {
    Admin.hasMany(models.InformasiPendaftaran, {
      foreignKey: "id_admin",
      as: "InformasiPendaftaran",
    });

    Admin.hasMany(models.Pendaftaran, {
      foreignKey: "id_admin",
      as: "Pendaftaran",
    });
  };

  return Admin;
};
