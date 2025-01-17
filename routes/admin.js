const express = require("express");
const router = express.Router();
const adminHandler = require("./handler/admin");

router.post("/register", adminHandler.register);
router.post("/login", adminHandler.login);
// router.get("/", usersHandler.getUser);
// router.get("/:id", usersHandler.getID);
// router.put("/update/:id", usersHandler.updateUser);

module.exports = router;
