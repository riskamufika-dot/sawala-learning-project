// try/catch dasar

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol");
  }
  return a / b;
}

try {
  console.log(bagi(10, 2));
  console.log(bagi(10, 0));
  console.log("Baris ini TIDAK akan pernah muncul");
} catch (error) {
  console.log("Terjadi error:", error.message);
}

console.log("Kode setelah try/catch tetap jalan normal");


//  try/catch/finally 

function cekStok(stok) {
  try {
    if (stok <= 0) {
      throw new Error("Stok habis");
    }
    console.log("Stok tersedia:", stok);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Selesai mengecek stok\n");
  }
}

cekStok(5);
cekStok(0);


// Error handling di dalam fetch (status HTTP)

async function ambilPosting(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

    if (!response.ok) {

      if (response.status === 404) {
        throw new Error("Postingan tidak ditemukan (404)");
      } else {
        throw new Error("Terjadi kesalahan server (status " + response.status + ")");
      }
    }

    const data = await response.json();
    console.log("Judul postingan:", data.title);
  } catch (error) {

    console.log("Gagal mengambil postingan:", error.message);
  }
}

ambilPosting(1);
ambilPosting(99999);


// Membuat custom error class (agak lanjutan, opsional dipahami dulu) 

class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

function validasiUmur(umur) {
  if (typeof umur !== "number") {
    throw new ValidasiError("Umur harus berupa angka");
  }
  if (umur < 0) {
    throw new ValidasiError("Umur tidak boleh negatif");
  }
  return "Umur valid: " + umur;
}

try {
  console.log(validasiUmur(-5));
} catch (error) {
  console.log(error.name + ":", error.message);
}
