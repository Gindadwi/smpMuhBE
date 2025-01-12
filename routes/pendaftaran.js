const express = require("express");
const router = express.Router();
const pendaftaranHandler = require("./handler/pendaftaran");
const authenticate = require("../middlewares/authenticate");

router.post("/daftarSiswa", authenticate, pendaftaranHandler.postPendaftaran);
router.get("/", authenticate, pendaftaranHandler.getAll);
router.get("/:id", authenticate, pendaftaranHandler.getID);

module.exports = router;
