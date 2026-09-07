const daftarSiswa = [
  { nama: "Princess", nilai: 85 },
  { nama: "Irfan", nilai: 55 },
  { nama: "Caca", nilai: 70 },
  { nama: "Bella", nilai: 40 },
  { nama: "Agus", nilai: 90 },
];

daftarSiswa.forEach(function (siswa) {
  console.log("Nama:", siswa.nama);
});

const semuaNama = daftarSiswa.map(function (siswa) {
  return siswa.nama;
});
console.log("Semua nama:", semuaNama);

const siswaLulus = daftarSiswa.filter(function (siswa) {
  return siswa.nilai >= 70;
});
console.log("Siswa lulus:", siswaLulus);

const siswaPerluBimbingan = daftarSiswa.find(function (siswa) {
  return siswa.nilai < 60;
});
console.log("Perlu bimbingan:", siswaPerluBimbingan);

const totalNilai = daftarSiswa.reduce(function (tabungan, siswa) {
  return tabungan + siswa.nilai;
}, 0);
console.log("Total nilai:", totalNilai);

const rataRata = totalNilai / daftarSiswa.length;
console.log("Rata-rata nilai:", rataRata);
