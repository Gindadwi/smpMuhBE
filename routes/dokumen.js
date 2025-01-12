const express = require("express");
const router = express.Router();
const dokumenHandler = require("./handler/dokumen");
const authenticate = require("../middlewares/authenticate");

router.post("/postDokumen", authenticate, dokumenHandler.postDokumen);
router.get("/", authenticate, dokumenHandler.getDokumenAll);

module.exports = router;
