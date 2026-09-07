// =========================================
// LATIHAN: Destructuring & Spread Operator (SOLUSI)
// =========================================

const produk = { nama: "Laptop", harga: 8000000, stok: 5 };

// 1. Object destructuring
const { nama, harga } = produk;

// 2. Cetak hasilnya
console.log("Nama:", nama);
console.log("Harga:", harga);

const warnaFavorit = ["biru", "hijau", "merah"];

// 3. Array destructuring - ambil posisi 0 dan 1
const [utama, kedua] = warnaFavorit;
console.log("Warna utama:", utama);   // "biru"
console.log("Warna kedua:", kedua);   // "hijau"

// 4. Gabungkan dua array pakai spread
const genap = [2, 4, 6];
const ganjil = [1, 3, 5];
const semuaAngka = [...genap, ...ganjil];
console.log("Semua angka:", semuaAngka); // [2, 4, 6, 1, 3, 5]

// 5. Salin object pakai spread, timpa satu properti (stok)
const produkBaru = { ...produk, stok: 10 };

// 6. Buktikan produk asli tidak berubah
console.log("Produk asli:", produk);       // stok tetap 5
console.log("Produk baru:", produkBaru);   // stok jadi 10
