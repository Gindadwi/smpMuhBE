// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/admin/login.js
const { Admin } = require("../../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari admin berdasarkan email
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    // Periksa password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    // Buat token JWT
    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success Login in Admin",
      data: {
        token,
        admin: {
          id: admin.id,
          nama: admin.name,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
