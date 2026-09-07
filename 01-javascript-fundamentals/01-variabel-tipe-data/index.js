// =========================================
// LATIHAN: Variabel & Tipe Data (SOLUSI)
// =========================================

// 1. const untuk yang tidak berubah, let untuk yang bisa berubah
const namaLengkap = "Budi Santoso";
let umur = 20;

// 2. Lima variabel dengan tipe data berbeda
let kotaAsal = "Bandung";       // string
let tinggiBadan = 170;          // number
let sudahMenikah = false;       // boolean
let anakKe = null;              // null (sengaja kosong, contoh: anak tunggal)
let statusPekerjaan;            // undefined (belum diisi sama sekali)

// 3. Cetak semua variabel dengan label
console.log("Nama:", namaLengkap);
console.log("Umur:", umur);
console.log("Kota asal:", kotaAsal);
console.log("Tinggi badan:", tinggiBadan);
console.log("Sudah menikah:", sudahMenikah);
console.log("Anak ke:", anakKe);
console.log("Status pekerjaan:", statusPekerjaan);

// 4. Dua angka dalam bentuk STRING, dijumlahkan pakai +
let angkaA = "10";
let angkaB = "5";
console.log("Hasil + tanpa konversi:", angkaA + angkaB); // "105" (nyambung, bukan dijumlah)

// 5. Perbaikan: ubah dulu jadi number sebelum dijumlahkan
console.log("Hasil + setelah dikonversi:", Number(angkaA) + Number(angkaB)); // 15

// 6. typeof null
console.log("typeof null:", typeof anakKe);
// Penjelasan: hasilnya "object", padahal anakKe isinya null.
// Ini adalah bug lama JavaScript yang sudah ada sejak awal bahasa ini dibuat,
// dan sengaja tidak diperbaiki karena banyak kode lama bergantung pada perilaku ini.
// Untuk cek null yang benar, gunakan: anakKe === null (bukan typeof)
