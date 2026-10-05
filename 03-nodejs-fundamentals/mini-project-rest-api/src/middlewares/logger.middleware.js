// =========================================
// Middleware: Logger
// =========================================
// Middleware adalah "function perantara" yang dijalankan SEBELUM
// request sampai ke tujuan akhirnya (controller). Gunanya macam-macam:
// logging, cek autentikasi, validasi data, dll.

function loggerMiddleware(req, res, next) {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${req.method} ${req.url}`);

  // next() WAJIB dipanggil, supaya request lanjut ke middleware/route
  // berikutnya. Kalau next() tidak dipanggil, request akan "nyangkut"
  // di sini selamanya (client tidak pernah dapat balasan).
  next();
}

module.exports = loggerMiddleware;
