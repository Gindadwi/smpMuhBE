const { Dokumen, Pendaftaran } = require("../../../models");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Membuat folder uploads jika belum ada
const uploadDir = path.join(__dirname, "../../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Menggunakan path absolut
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage }).fields([
  { name: "fileKK", maxCount: 1 },
  { name: "fileSKHUN", maxCount: 1 },
  { name: "fileAktaKelahiran", maxCount: 1 },
  { name: "fileKIP", maxCount: 1 },
  { name: "fileSertifikat", maxCount: 1 },
]);

module.exports = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        status: "error",
        message: err.message,
      });
    }

    try {
      const { id_pendaftaran } = req.body;

      if (!id_pendaftaran) {
        return res.status(400).json({
          status: "error",
          message: "id_pendaftaran is required",
        });
      }

      if (!req.files.fileKK || !req.files.fileSKHUN) {
        return res.status(400).json({
          status: "error",
          message: "fileKK and fileSKHUN are required",
        });
      }

      // Menyimpan dokumen ke database
      const dokumen = await Dokumen.create({
        fileKK: req.files.fileKK[0].filename,
        fileSKHUN: req.files.fileSKHUN[0].filename,
        fileAktaKelahiran: req.files.fileAktaKelahiran
          ? req.files.fileAktaKelahiran[0].filename
          : null,
        fileKIP: req.files.fileKIP ? req.files.fileKIP[0].filename : null,
        fileSertifikat: req.files.fileSertifikat
          ? req.files.fileSertifikat[0].filename
          : null,
      });

      // Memperbarui id_dokumen di tabel Pendaftaran
      await Pendaftaran.update(
        { id_dokumen: dokumen.id },
        { where: { id: id_pendaftaran } }
      );

      res.status(201).json({
        status: "success",
        message: "Dokumen berhasil diunggah",
        data: dokumen,
      });
    } catch (error) {
      console.error("Error during document upload:", error);
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
    }
  });
};
