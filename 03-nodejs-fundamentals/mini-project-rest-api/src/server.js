// =========================================
// Server: Entry Point
// =========================================
// File ini adalah "pintu masuk utama" aplikasi - di sinilah Express
// di-setup, middleware dipasang, dan route dihubungkan, baru server
// benar-benar dinyalakan.

require("dotenv").config(); // membaca file .env, isinya dimasukkan ke process.env

const express = require("express");
const loggerMiddleware = require("./middlewares/logger.middleware");
const articlesRoute = require("./routes/articles.route");

const app = express();

// PORT diambil dari environment variable (.env), dengan nilai cadangan
// 3000 kalau variabel PORT tidak ditemukan di .env
const PORT = process.env.PORT || 3000;

// --- Middleware global (dijalankan untuk SEMUA request) ---
app.use(express.json()); // supaya Express bisa membaca body request berformat JSON
app.use(loggerMiddleware); // logger custom yang kita buat tadi

// --- Routes ---
// Semua request yang alamatnya diawali "/articles" akan diarahkan
// ke articlesRoute (lihat src/routes/articles.route.js)
app.use("/articles", articlesRoute);

// Route dasar, buat ngecek server hidup atau tidak
app.get("/", function (req, res) {
  res.json({
    message: "Mini Project REST API - Articles",
    status: "Server berjalan normal",
  });
});

// Middleware ini dijalankan kalau TIDAK ADA route yang cocok sama sekali
app.use(function (req, res) {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

app.listen(PORT, function () {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
