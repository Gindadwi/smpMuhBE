// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/pendaftaran/updatePendaftaran.js
const { Pendaftaran } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
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
      status,
    } = req.body;

    const pendaftaran = await Pendaftaran.findByPk(id);

    if (!pendaftaran) {
      return res.status(404).json({
        status: "error",
        message: "Pendaftaran not found",
      });
    }

    await Pendaftaran.update(
      {
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
        status,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Pendaftaran updated successfully",
    });
  } catch (error) {
    console.error("Error updating pendaftaran:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
