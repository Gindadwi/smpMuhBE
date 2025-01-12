"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pendaftaran", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE", // Perbarui userId jika kunci di users berubah
        onDelete: "CASCADE", // Hapus data jika user terkait dihapus
      },
      id_dokumen: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Dokumen",
          key: "id",
        },
        onUpdate: "CASCADE", // Perbarui userId jika kunci di users berubah
        onDelete: "CASCADE", // Hapus data jika user terkait dihapus
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Admins", // Referensi ke model Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nama_ortu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_Hp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nik: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      asal_sekolah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nilai_IPA: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nilai_Matematika: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nilai_Bhs_Indonesia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nilai_rata: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.droptable("pendaftaran");
  },
};
