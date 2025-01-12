const { Pendaftaran, Dokumen, Admin } = require("../../../models");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = async (req, res) => {
  try {
    console.log(req.body);

    const {
      nama,
      tempat_lahir,
      tanggal_lahir,
      nama_ortu,
      alamat,
      no_Hp,
      nik,
      jenis_kelamin,
      asal_sekolah,
      nilai_IPA,
      nilai_Matematika,
      nilai_Bhs_Indonesia,
      nilai_rata,
      id_dokumen = null, // Jika tidak ada, defaultkan ke null
      id_admin = null, // Jika tidak ada, defaultkan ke null
    } = req.body;

    // Pastikan req.user tersedia (token sudah terverifikasi di middleware)
    if (!req.user) {
      return res.status(400).json({ message: "Missing user data" });
    }

    const id_users = req.user.id;

    // Parsing tanggal lahir menggunakan dayjs
    const parsedTanggalLahir = dayjs(tanggal_lahir).format("YYYY-MM-DD");

    const pendaftaran = await Pendaftaran.create({
      nama,
      tempat_lahir,
      tanggal_lahir: parsedTanggalLahir,
      nama_ortu,
      alamat,
      no_Hp,
      nik,
      jenis_kelamin,
      asal_sekolah,
      nilai_IPA,
      nilai_Matematika,
      nilai_Bhs_Indonesia,
      nilai_rata,
      id_users: id_users, // ID pengguna diambil dari decoded token
      id_dokumen, // Dokumen ID yang bisa null
      id_admin, // Admin ID yang bisa null
    });

    res.status(201).json({
      status: "success",
      data: {
        id: pendaftaran.id,
      },
      pendaftaran,
    });
  } catch (error) {
    console.error("Error during creation:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
