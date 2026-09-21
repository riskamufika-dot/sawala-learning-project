// =========================================
// LATIHAN: TypeScript Basic - Type & Interface
// =========================================
// TypeScript = JavaScript + "aturan tipe data" yang dicek SEBELUM kode dijalankan.
// Tujuannya: menangkap kesalahan lebih awal (saat menulis kode, bukan saat kode jalan).

// --- BAGIAN 1: Type anotasi dasar ---
// Di belakang nama variabel, kita bisa kasih tahu "ini harus bertipe apa"

let nama: string = "Budi";
let umur: number = 20;
let sudahLulus: boolean = true;

// Kalau kita coba isi dengan tipe yang salah, TypeScript akan MEMPERINGATKAN
// (coba uncomment baris di bawah ini, akan muncul error merah di editor)
// umur = "dua puluh"; // ERROR: Type 'string' is not assignable to type 'number'


// --- BAGIAN 2: Type untuk array ---

let daftarNama: string[] = ["Budi", "Rani", "Sari"];
let daftarNilai: number[] = [80, 90, 75];


// --- BAGIAN 3: Type alias - membuat "nama tipe" custom ---

type StatusPembayaran = "pending" | "berhasil" | "gagal";
// ini artinya: StatusPembayaran HANYA boleh diisi salah satu dari 3 nilai ini

let status1: StatusPembayaran = "berhasil"; // OK
// let status2: StatusPembayaran = "batal"; // ERROR, karena "batal" tidak ada di daftar


// --- BAGIAN 4: Interface - bentuk/struktur object ---
// Interface mendefinisikan "kontrak": object apapun yang pakai tipe ini
// HARUS punya properti-properti berikut, dengan tipe yang sesuai

interface Siswa {
  nama: string;
  umur: number;
  nilai: number;
  sudahLulus: boolean;
}

const siswa1: Siswa = {
  nama: "Dodi",
  umur: 17,
  nilai: 85,
  sudahLulus: true,
};

// Kalau ada properti yang kurang atau salah tipe, TypeScript akan error.
// Coba uncomment ini untuk lihat errornya:
// const siswaSalah: Siswa = {
//   nama: "Sinta",
//   umur: "tujuh belas", // ERROR: harus number, bukan string
// }; // juga ERROR: properti 'nilai' dan 'sudahLulus' tidak ada


// --- BAGIAN 5: Interface dengan properti opsional (pakai tanda ?) ---

interface Produk {
  nama: string;
  harga: number;
  deskripsi?: string; // tanda "?" artinya properti ini BOLEH tidak diisi
}

const produk1: Produk = {
  nama: "Laptop",
  harga: 8000000,
  // deskripsi tidak diisi, ini TETAP VALID karena opsional
};

const produk2: Produk = {
  nama: "Mouse",
  harga: 150000,
  deskripsi: "Mouse wireless dengan baterai tahan lama",
};


// --- BAGIAN 6: Function dengan tipe parameter dan return ---

function tambah(a: number, b: number): number {
  return a + b;
}

function sapa(nama: string): string {
  return "Halo, " + nama + "!";
}

console.log(tambah(5, 3));
console.log(sapa("Rani"));

// Kalau parameter yang dikirim salah tipe, TypeScript akan error:
// tambah(5, "tiga"); // ERROR: argument of type 'string' is not assignable to 'number'


// --- BAGIAN 7: Function dengan interface sebagai parameter ---

function tampilkanSiswa(siswa: Siswa): string {
  return siswa.nama + " (umur " + siswa.umur + ") - Nilai: " + siswa.nilai;
}

console.log(tampilkanSiswa(siswa1));

export {}; // baris ini supaya file dikenali sebagai module (hindari konflik nama)
