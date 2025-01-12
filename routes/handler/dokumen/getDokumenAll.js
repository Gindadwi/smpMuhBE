const { Dokumen } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { dokumenId } = req.query;
    const sqlOptions = {
      attributes: [
        "id",
        "fileKK",
        "fileSKHUN",
        "fileAktaKelahiran",
        "fileKIP",
        "fileSertifikat",
      ],
    };

    //jika dokumenId ada, filter berdasarkan dokumenId
    if (dokumenId) {
      sqlOptions.where = {
        id: dokumenId,
      };
    }

    //ambil data dokumen
    const dokumenData = await Dokumen.findAll(sqlOptions);

    //jika tidak ada data
    if (dokumenData.leght === 0) {
      return res.status(404).json({
        status: "error",
        message: "No dokumen data found.",
      });
    }

    //kembalikan data dokumen
    res.status(200).json({
      status: "success",
      data: dokumenData,
    });
  } catch (error) {
    console.error("Error during fetching pendaftaran data:", error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
