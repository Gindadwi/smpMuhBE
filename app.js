require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const pendaftaranRouter = require("./routes/pendaftaran");
const dokumenRouter = require("./routes/dokumen");
const adminRouter = require("./routes/admin");
const informasiRouter = require("./routes/informasiPendaftaran");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/pendaftaran", pendaftaranRouter);
app.use("/dokumen", dokumenRouter);
app.use("/informasi", informasiRouter);

module.exports = app;
