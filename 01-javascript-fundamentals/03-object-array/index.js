// =========================================
// LATIHAN: Object & Array (SOLUSI)
// MINI EXERCISE: Pengolahan Data Siswa
// =========================================

const daftarSiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Rani", nilai: 55 },
  { nama: "Sari", nilai: 70 },
  { nama: "Dodi", nilai: 40 },
  { nama: "Andi", nilai: 90 },
];

// 1. Siswa pertama dan terakhir
console.log("Siswa pertama:", daftarSiswa[0].nama); // "Budi"
console.log("Siswa terakhir:", daftarSiswa[daftarSiswa.length - 1].nama); // "Andi"
// daftarSiswa.length adalah 5, index terakhir selalu length - 1, yaitu index 4

// 2. Tambah siswa baru pakai push()
daftarSiswa.push({ nama: "Sinta", nilai: 60 });
console.log("Setelah ditambah:", daftarSiswa);

// 3. Buat object siswaTerbaik secara manual (dilihat dari data: Andi nilai 90 tertinggi)
const siswaTerbaik = { nama: "Andi", nilai: 90 };
console.log("Siswa terbaik:", siswaTerbaik);

// 4. Update nilai Dodi (Dodi ada di index 3) menjadi 75
daftarSiswa[3].nilai = 75;
console.log("Setelah update Dodi:", daftarSiswa[3]);

// 5. Cetak semua data siswa pakai for loop biasa
for (let i = 0; i < daftarSiswa.length; i++) {
  console.log("Nama: " + daftarSiswa[i].nama + ", Nilai: " + daftarSiswa[i].nilai);
}
