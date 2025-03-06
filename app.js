require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users.js");
const pendaftaranRouter = require("./routes/pendaftaran.js");
const dokumenRouter = require("./routes/dokumen.js");
const adminRouter = require("./routes/admin.js");
const informasiRouter = require("./routes/informasiPendaftaran.js");

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

module.exports = app;
