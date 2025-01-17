// Import model InformasiPendaftaran dari folder models
const { InformasiPendaftaran } = require("../../../models");

// Ekspor fungsi handler untuk menangani permintaan
module.exports = async (req, res) => {
  try {
    // Destrukturisasi parameter query dari request
    const { informasi_id } = req.query;

    // Konfigurasi opsi untuk query database menggunakan Sequelize
    const sqlOptions = {
      // Pilih hanya atribut tertentu yang akan diambil dari tabel
      attributes: [
        "id",
        "tanggal_buka",
        "tanggal_tutup",
        "status",
        "detail",
        "id_admin",
      ],
    };

    // Jika informasi_id diberikan dalam query parameter, tambahkan filter berdasarkan ID
    if (informasi_id) {
      sqlOptions.where = {
        id: informasi_id, // Filter berdasarkan id
      };
    }

    // Query database untuk mendapatkan data berdasarkan sqlOptions
    const informasi = await InformasiPendaftaran.findAll(sqlOptions);

    // Jika data tidak ditemukan, kirim respons 404 dengan pesan error
    if (!informasi || informasi.length === 0) {
      return res.status(404).json({
        status: "error", // Status error untuk respons
        message: "No informasi pendaftaran found", // Pesan bahwa data tidak ditemukan
      });
    }

    // Jika data ditemukan, kirimkan data dalam respons dengan status 200 (success)
    res.status(200).json({
      status: "success", // Status sukses untuk respons
      data: informasi, // Data hasil query
    });
  } catch (error) {
    // Jika terjadi error saat proses, log error ke console
    console.error("Error during fetching informasi pendaftaran data:", error);
    // Kirim respons 500 dengan pesan error
    res.status(500).json({
      status: "error", // Status error untuk respons
      message: "Server Error", // Pesan bahwa terjadi error pada server
    });
  }
};
