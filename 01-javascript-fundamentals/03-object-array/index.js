const daftarSiswa = [
  { nama: "Princess", nilai: 85 },
  { nama: "Irfan", nilai: 55 },
  { nama: "Caca", nilai: 70 },
  { nama: "Bella", nilai: 40 },
  { nama: "Agus", nilai: 90 },
];

console.log("Siswa pertama:", daftarSiswa[0].nama);
console.log("Siswa terakhir:", daftarSiswa[daftarSiswa.length - 1].nama);

daftarSiswa.push({ nama: "Sinta", nilai: 60 });
console.log("Setelah ditambah:", daftarSiswa);


const siswaTerbaik = { nama: "Agus", nilai: 90 };
console.log("Siswa terbaik:", siswaTerbaik);

daftarSiswa[3].nilai = 75;
console.log("Setelah update Bella:", daftarSiswa[3]);

for (let i = 0; i < daftarSiswa.length; i++) {
  console.log("Nama: " + daftarSiswa[i].nama + ", Nilai: " + daftarSiswa[i].nilai);
}
