interface Produk {
  id: number;
  nama: string;
  harga: number;
  kategori: string;
}

const daftarProduk: Produk[] = [
  { id: 1, nama: "Laptop Asus", harga: 8000000, kategori: "Elektronik" },
  { id: 2, nama: "Kaos Polos", harga: 75000, kategori: "Fashion" },
  { id: 3, nama: "Novel Fiksi", harga: 95000, kategori: "Buku" },
];

// Array methods (map, filter, reduce) dengan TypeScript

function totalHarga(produkList: Produk[]): number {
  return produkList.reduce(function (total: number, produk: Produk): number {
    return total + produk.harga;
  }, 0);
}

function namaSemuaProduk(produkList: Produk[]): string[] {
  return produkList.map(function (produk: Produk): string {
    return produk.nama;
  });
}

console.log("Total harga:", totalHarga(daftarProduk));
console.log("Semua nama:", namaSemuaProduk(daftarProduk));


// Type untuk fungsi async 

interface User {
  id: number;
  name: string;
  email: string;
}

async function ambilUser(id: number): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data: User = await response.json();
  return data;
}

async function jalankan(): Promise<void> {
  try {
    const user = await ambilUser(1);
    console.log("User:", user.name, "-", user.email);
  } catch (error) {
    console.log("Gagal ambil user");
  }
}

jalankan();
