"use strict";

module.exports = (sequelize, DataTypes) => {
  const Pendaftaran = sequelize.define(
    "Pendaftaran",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_users: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_dokumen: {
        type: DataTypes.INTEGER,
        references: {
          model: "Dokumen",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_admin: {
        type: DataTypes.INTEGER,
        references: {
          model: "Admins",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nama_ortu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_Hp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nik: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      asal_sekolah: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nilai_IPA: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nilai_Matematika: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nilai_Bhs_Indonesia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nilai_rata: {
        type: DataTypes.INTEGER,
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
      tableName: "pendaftaran",
    }
  );

  Pendaftaran.associate = (models) => {
    Pendaftaran.belongsTo(models.User, {
      as: "User",
      foreignKey: "users_id",
    });

    Pendaftaran.belongsTo(models.Dokumen, {
      as: "Dokumen",
      foreignKey: "id_dokumen",
    });

    Pendaftaran.belongsTo(models.Admin, {
      as: "Admin",
      foreignKey: "admin_id",
    });
  };

  return Pendaftaran;
};
