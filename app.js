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

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/pendaftaran", pendaftaranRouter);
app.use("/dokumen", dokumenRouter);
app.use("/informasi", informasiRouter);

// Jalankan server di port dari ENV atau 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
