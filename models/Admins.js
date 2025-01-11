// models/admin.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
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
  });

  Admin.associate = (models) => {
    Admin.hasMany(models.InformasiPendaftaran, {
      foreignKey: "admin_id",
      as: "InformasiPendaftaran",
    });

    Admin.hasMany(models.Pendaftaran, {
      foreignKey: "admin_id",
      as: "Pendaftaran",
    });
  };

  return Admin;
};
