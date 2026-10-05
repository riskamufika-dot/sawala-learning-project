// =========================================
// "Database" sementara (in-memory / tersimpan di RAM)
// =========================================
// Untuk latihan ini, data disimpan di array biasa di dalam memori
// komputer (bukan database beneran seperti MongoDB/PostgreSQL).
// Konsekuensinya: begitu server dimatikan, data kembali ke kondisi awal.
// Ini sengaja disederhanakan supaya fokus belajar konsep CRUD dan Express dulu.

let articles = [
  {
    id: 1,
    judul: "Mengenal Node.js untuk Pemula",
    isi: "Node.js adalah runtime yang memungkinkan JavaScript berjalan di luar browser.",
    penulis: "Admin",
  },
  {
    id: 2,
    judul: "Apa itu REST API?",
    isi: "REST API adalah cara standar aplikasi saling berkomunikasi lewat HTTP.",
    penulis: "Admin",
  },
  {
    id: 3,
    judul: "Perbedaan CommonJS dan ES Modules",
    isi: "CommonJS pakai require/module.exports, ES Modules pakai import/export.",
    penulis: "Admin",
  },
];

// nextId dipakai untuk menentukan id artikel baru yang ditambahkan
let nextId = 4;

module.exports = {
  // getter/setter sederhana supaya file lain bisa akses & ubah data ini
  getArticles: () => articles,
  setArticles: (newArticles) => {
    articles = newArticles;
  },
  getNextId: () => nextId++,
};
