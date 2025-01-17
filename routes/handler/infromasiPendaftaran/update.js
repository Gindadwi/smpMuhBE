// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/informasiPendaftaran/update.js
const { InformasiPendaftaran } = require("../../../models");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { tanggal_mulai, tanggal_selesai, detail, status } = req.body;

    const id_admin = req.admin.id;

    const parsedTanggalMulai = dayjs(tanggal_mulai).format("YYYY-MM-DD");
    const parsedTanggalSelesai = dayjs(tanggal_selesai).format("YYYY-MM-DD");

    const informasi = await InformasiPendaftaran.findByPk(id);

    if (!informasi) {
      return res.status(404).json({
        status: "error",
        message: "InformasiPendaftaran not found",
      });
    }

    await InformasiPendaftaran.update(
      {
        tanggal_buka: parsedTanggalMulai,
        tanggal_tutup: parsedTanggalSelesai,
        detail,
        status,
        id_admin,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "InformasiPendaftaran updated successfully",
    });
  } catch (error) {
    console.error("Error during update:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
