// =========================================
// LATIHAN: Looping & Array Methods (SOLUSI)
// LANJUTAN MINI EXERCISE: Pengolahan Data Siswa
// =========================================

const daftarSiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Rani", nilai: 55 },
  { nama: "Sari", nilai: 70 },
  { nama: "Dodi", nilai: 40 },
  { nama: "Andi", nilai: 90 },
];

// 1. forEach - cetak semua nama
daftarSiswa.forEach(function (siswa) {
  console.log("Nama:", siswa.nama);
});

// 2. map - ambil hanya nama-nama siswa jadi array baru
const semuaNama = daftarSiswa.map(function (siswa) {
  return siswa.nama;
});
console.log("Semua nama:", semuaNama); // ["Budi", "Rani", "Sari", "Dodi", "Andi"]

// 3. filter - siswa dengan nilai >= 70
const siswaLulus = daftarSiswa.filter(function (siswa) {
  return siswa.nilai >= 70;
});
console.log("Siswa lulus:", siswaLulus);

// 4. find - siswa PERTAMA dengan nilai di bawah 60
const siswaPerluBimbingan = daftarSiswa.find(function (siswa) {
  return siswa.nilai < 60;
});
console.log("Perlu bimbingan:", siswaPerluBimbingan); // { nama: "Rani", nilai: 55 }

// 5. reduce - total semua nilai
const totalNilai = daftarSiswa.reduce(function (tabungan, siswa) {
  return tabungan + siswa.nilai;
}, 0);
console.log("Total nilai:", totalNilai); // 85+55+70+40+90 = 340

// 6. rata-rata nilai
const rataRata = totalNilai / daftarSiswa.length;
console.log("Rata-rata nilai:", rataRata); // 340 / 5 = 68
