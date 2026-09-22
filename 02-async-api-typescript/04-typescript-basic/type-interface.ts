// Type anotasi dasar

let nama: string = "Budi";
let umur: number = 20;
let sudahLulus: boolean = true;


// Type untuk array 

let daftarNama: string[] = ["Budi", "Rani", "Sari"];
let daftarNilai: number[] = [80, 90, 75];


// Type alias - membuat "nama tipe" custom 

type StatusPembayaran = "pending" | "berhasil" | "gagal";

let status1: StatusPembayaran = "berhasil";


// Interface - bentuk/struktur object

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



// Interface dengan properti opsional (pakai tanda ?) 

interface Produk {
  nama: string;
  harga: number;
  deskripsi?: string;
}

const produk1: Produk = {
  nama: "Laptop",
  harga: 8000000,
};

const produk2: Produk = {
  nama: "Mouse",
  harga: 150000,
  deskripsi: "Mouse wireless dengan baterai tahan lama",
};


// Function dengan tipe parameter dan return 

function tambah(a: number, b: number): number {
  return a + b;
}

function sapa(nama: string): string {
  return "Halo, " + nama + "!";
}

console.log(tambah(5, 3));
console.log(sapa("Rani"));


// Function dengan interface sebagai parameter

function tampilkanSiswa(siswa: Siswa): string {
  return siswa.nama + " (umur " + siswa.umur + ") - Nilai: " + siswa.nilai;
}

console.log(tampilkanSiswa(siswa1));

export { };