// =========================================
// LATIHAN: Node.js Runtime, Event Loop & Module System (CommonJS)
// =========================================
// Jalankan dengan: node index.js

// --- BAGIAN 1: Apa itu Node.js runtime? ---
// Node.js adalah "tempat" untuk menjalankan JavaScript DI LUAR browser.
// Beberapa objek bawaan yang HANYA ada di Node.js (tidak ada di browser):

console.log("=== BAGIAN 1: Informasi Runtime ===");
console.log("Versi Node.js:", process.version);
console.log("Platform OS:", process.platform);
console.log("Folder kerja saat ini:", process.cwd());
// process adalah objek global bawaan Node.js, isinya informasi
// tentang program yang sedang berjalan


// --- BAGIAN 2: Event Loop dasar ---
// Event loop adalah "mekanisme" Node.js dalam mengurus banyak tugas
// sekaligus tanpa saling menunggu (mirip konsep Promise yang sudah
// dipelajari di minggu 3-4, tapi ini levelnya lebih dasar/fundamental)

console.log("\n=== BAGIAN 2: Event Loop ===");
console.log("1. Kode sinkron (synchronous) - dijalankan duluan, berurutan");

setTimeout(function () {
  console.log("4. setTimeout 0ms - masuk antrian 'timer'");
}, 0);

setImmediate(function () {
  console.log("5. setImmediate - masuk antrian 'check', biasanya setelah timer");
});

process.nextTick(function () {
  console.log("3. process.nextTick - PALING PRIORITAS, dijalankan sebelum timer manapun");
});

console.log("2. Kode sinkron lagi - tetap dijalankan sebelum semua yang di atas");

// Catatan: urutan keluarnya nanti adalah 1, 2, 3, 4, 5
// Ini membuktikan: kode sinkron SELALU selesai dulu, baru giliran
// "antrian" dijalankan sesuai prioritasnya masing-masing.
// (Urutan 4 dan 5 bisa sedikit bervariasi tergantung environment,
// tapi process.nextTick selalu paling duluan di antara ketiganya)


// --- BAGIAN 3: Module System - CommonJS ---
// require() adalah cara MENGIMPOR module di CommonJS (gaya lama/klasik,
// tapi masih sangat umum dipakai terutama di banyak project Node.js)

console.log("\n=== BAGIAN 3: CommonJS (require) ===");

// require() bisa pakai module BAWAAN Node.js, contoh: "path"
const path = require("path");
console.log("Nama file ini:", path.basename(__filename));

// require() juga bisa pakai module BUATAN SENDIRI (file lain)
const helper = require("./commonjs-helper.js");
console.log("Dari commonjs-helper.js:", helper.NAMA_MODULE);
console.log("helper.tambah(5, 3) =", helper.tambah(5, 3));
console.log("helper.kurang(5, 3) =", helper.kurang(5, 3));

// Variabel bawaan CommonJS yang otomatis tersedia di tiap file:
console.log("\n__filename (path lengkap file ini):", __filename);
console.log("__dirname (folder tempat file ini berada):", __dirname);
