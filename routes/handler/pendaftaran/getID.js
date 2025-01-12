// filepath: /D:/TUGAS KULIAH/SEMESTER 7/project skripsi/Backend/service-Sekolah/routes/handler/pendaftaran/getID.js
const { Pendaftaran, Dokumen } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  try {
    const pendaftaran = await Pendaftaran.findByPk(id, {
      attributes: [
        "id",
        "nama",
        "tempat_lahir",
        "tanggal_lahir",
        "nama_ortu",
        "alamat",
        "no_Hp",
        "nik",
        "jenis_kelamin",
        "asal_sekolah",
        "nilai_IPA",
        "nilai_Matematika",
        "nilai_Bhs_Indonesia",
        "nilai_rata",
      ],
      include: [
        {
          model: Dokumen,
          as: "Dokumen", // Pastikan alias sesuai dengan yang didefinisikan di model
          attributes: [
            "id",
            "fileKK",
            "fileSKHUN",
            "fileAktaKelahiran",
            "fileKIP",
            "fileSertifikat",
          ],
        },
      ],
    });

    if (!pendaftaran) {
      return res.status(404).json({
        status: "error",
        message: "Pendaftaran not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: pendaftaran,
    });
  } catch (error) {
    console.error("Error fetching pendaftaran:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
