// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/admin/register.js
const { Admin } = require("../../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { name, email, password: plainPassword } = req.body;

    // Periksa apakah email sudah terdaftar
    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({
        status: "error",
        message: "Email already registered",
      });
    }

    // Hash password
    const password = await bcrypt.hash(plainPassword, 10);

    // Buat data admin baru
    const data = {
      name,
      email,
      password,
    };

    const create = await Admin.create(data);

    res.json({
      status: "success register admin",
      data: {
        id: create.id,
      },
    });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
