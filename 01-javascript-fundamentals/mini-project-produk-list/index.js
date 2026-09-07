// =========================================
// MINI PROJECT: Daftar Produk dengan Filter & Pencarian (SOLUSI)
// =========================================

import { daftarProduk } from "./data.js";

// 1. Tampilkan semua produk pakai forEach
function tampilkanSemua(produkList) {
  produkList.forEach(function (produk, index) {
    console.log(
      (index + 1) + ". " + produk.nama + " - " + produk.kategori + " - Rp" + produk.harga
    );
  });
}

// 2. Filter berdasarkan kategori
function filterKategori(produkList, kategori) {
  return produkList.filter(function (produk) {
    // toLowerCase() supaya tidak peduli huruf besar/kecil
    return produk.kategori.toLowerCase() === kategori.toLowerCase();
  });
}

// 3. Cari produk berdasarkan kata kunci di nama
function cariProduk(produkList, kataKunci) {
  return produkList.filter(function (produk) {
    return produk.nama.toLowerCase().includes(kataKunci.toLowerCase());
  });
}

// 4. Cari produk dengan harga termurah pakai reduce
function hargaTermurah(produkList) {
  return produkList.reduce(function (termurah, produk) {
    // bandingkan harga produk saat ini dengan "termurah" yang sudah tersimpan
    return produk.harga < termurah.harga ? produk : termurah;
  });
  // catatan: reduce tanpa nilai awal akan pakai item pertama sebagai starting point
}

// 5. Total harga semua produk dalam satu kategori
function totalHargaKategori(produkList, kategori) {
  const produkKategori = filterKategori(produkList, kategori);
  return produkKategori.reduce(function (total, produk) {
    return total + produk.harga;
  }, 0);
}

// --- Menjalankan semua function ---
console.log("=== Semua Produk ===");
tampilkanSemua(daftarProduk);

console.log("\n=== Kategori Elektronik ===");
console.log(filterKategori(daftarProduk, "Elektronik"));

console.log("\n=== Cari 'kaos' ===");
console.log(cariProduk(daftarProduk, "kaos"));

console.log("\n=== Produk Termurah ===");
console.log(hargaTermurah(daftarProduk));

console.log("\n=== Total Harga Kategori Fashion ===");
console.log(totalHargaKategori(daftarProduk, "Fashion"));
