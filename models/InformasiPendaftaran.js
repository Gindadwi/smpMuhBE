"use strict";

module.exports = (sequelize, DataTypes) => {
  const InformasiPendaftaran = sequelize.define(
    "InformasiPendaftaran",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Admins",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tanggal_buka: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tanggal_tutup: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
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
    },
    {
      timestamps: true,
      tableName: "informasipendaftaran",
    }
  );

  InformasiPendaftaran.associate = (models) => {
    InformasiPendaftaran.belongsTo(models.Admin, {
      foreignKey: "id_admin",
      as: "Admin",
    });
  };

  return InformasiPendaftaran;
};
