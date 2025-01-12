const { Pendaftaran } = require("../../../models");

module.exports = async (req, res) => {
  try {
    // Ambil query parameter pendaftaran_id (jika ada)
    const { pendaftaran_id } = req.query;

    // Opsi untuk query sequelize
    const sqlOptions = {
      attributes: [
        "id",
        "id_users",
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
        "id_dokumen",
        "id_admin",
      ],
    };

    // Jika pendaftaran_id ada, filter berdasarkan pendaftaran_id
    if (pendaftaran_id) {
      sqlOptions.where = {
        id: pendaftaran_id,
      };
    }

    // Ambil data pendaftaran
    const pendaftaranData = await Pendaftaran.findAll(sqlOptions);

    // Jika tidak ada data
    if (pendaftaranData.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No pendaftaran data found.",
      });
    }

    // Kembalikan data pendaftaran
    res.status(200).json({
      status: "success",
      data: pendaftaranData,
    });
  } catch (error) {
    console.error("Error during fetching pendaftaran data:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
