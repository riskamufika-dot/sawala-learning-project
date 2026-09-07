const produk = { nama: "Laptop", harga: 8000000, stok: 5 };

const { nama, harga } = produk;

console.log("Nama:", nama);
console.log("Harga:", harga);

const warnaFavorit = ["biru", "hitam", "Pink"];

const [utama, kedua] = warnaFavorit;
console.log("Warna utama:", utama);
console.log("Warna kedua:", kedua);

const genap = [2, 4, 6];
const ganjil = [1, 3, 5];
const semuaAngka = [...genap, ...ganjil];
console.log("Semua angka:", semuaAngka);

const produkBaru = { ...produk, stok: 10 };

console.log("Produk asli:", produk);
console.log("Produk baru:", produkBaru);
