// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/informasiPendaftaran/post.js
const { InformasiPendaftaran } = require("../../../models");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = async (req, res) => {
  try {
    const { tanggal_mulai, tanggal_selesai, detail, status } = req.body;

    const id_admin = req.admin.id;

    const parsedTanggalMulai = dayjs(tanggal_mulai).format("YYYY-MM-DD");
    const parsedTanggalSelesai = dayjs(tanggal_selesai).format("YYYY-MM-DD");

    const informasi = await InformasiPendaftaran.create({
      tanggal_buka: parsedTanggalMulai,
      tanggal_tutup: parsedTanggalSelesai,
      detail,
      status,
      id_admin,
    });

    res.status(201).json({
      status: "success",
      data: {
        id: informasi.id,
      },
      informasi,
    });
  } catch (error) {
    console.error("Error during creation:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
