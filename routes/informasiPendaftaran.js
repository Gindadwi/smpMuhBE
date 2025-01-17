const express = require("express");
const router = express.Router();
const informasiHandler = require("./handler/infromasiPendaftaran");
const authenticate = require("../middlewares/authenticate");

router.post("/post", authenticate, informasiHandler.post);
router.get("/", authenticate, informasiHandler.getAll);
// router.get("/:id", authenticate, pendaftaranHandler.getID);
router.put("/update/:id", authenticate, informasiHandler.update);

module.exports = router;
