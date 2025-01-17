const { Dokumen } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params.id;

  const dokumen = await Dokumen.findByPk(id, {
    attributes: [
      "id",
      "fileKK",
      "fileSKHUN",
      "fileAktaKelahiran",
      "fileKIP",
      "fileSertifikat",
    ],
  });

  if (!dokumen) {
    return res.status(404).json({
      status: "error",
      message: "Dokumen not found",
    });
  }

  return res.json({
    status: "success",
    data: dokumen,
  });
};
