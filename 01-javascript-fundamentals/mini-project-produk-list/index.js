import { daftarProduk } from "./data.js";

function tampilkanSemua(produkList) {
  produkList.forEach(function (produk, index) {
    console.log(
      (index + 1) + ". " + produk.nama + " - " + produk.kategori + " - Rp" + produk.harga
    );
  });
}

function filterKategori(produkList, kategori) {
  return produkList.filter(function (produk) {

    return produk.kategori.toLowerCase() === kategori.toLowerCase();
  });
}


function cariProduk(produkList, kataKunci) {
  return produkList.filter(function (produk) {
    return produk.nama.toLowerCase().includes(kataKunci.toLowerCase());
  });
}

function hargaTermurah(produkList) {
  return produkList.reduce(function (termurah, produk) {

    return produk.harga < termurah.harga ? produk : termurah;
  });

}

function totalHargaKategori(produkList, kategori) {
  const produkKategori = filterKategori(produkList, kategori);
  return produkKategori.reduce(function (total, produk) {
    return total + produk.harga;
  }, 0);
}


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
