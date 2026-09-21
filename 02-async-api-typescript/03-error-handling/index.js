// =========================================
// LATIHAN: Error Handling
// =========================================

// --- BAGIAN 1: try/catch dasar ---

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol");
  }
  return a / b;
}

try {
  console.log(bagi(10, 2)); // aman, hasil 5
  console.log(bagi(10, 0)); // ini akan melempar error
  console.log("Baris ini TIDAK akan pernah muncul"); // karena error di atas menghentikan try
} catch (error) {
  console.log("Terjadi error:", error.message);
}

console.log("Kode setelah try/catch tetap jalan normal");


// --- BAGIAN 2: try/catch/finally ---
// "finally" selalu dijalankan, baik try berhasil ATAU gagal

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


// --- BAGIAN 3: Error handling di dalam fetch (status HTTP) ---

async function ambilPosting(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

    if (!response.ok) {
      // Contoh penanganan berdasarkan status code
      if (response.status === 404) {
        throw new Error("Postingan tidak ditemukan (404)");
      } else {
        throw new Error("Terjadi kesalahan server (status " + response.status + ")");
      }
    }

    const data = await response.json();
    console.log("Judul postingan:", data.title);
  } catch (error) {
    // error bisa dari throw manual DI ATAS, atau dari fetch itu sendiri
    // (misalnya tidak ada koneksi internet)
    console.log("Gagal mengambil postingan:", error.message);
  }
}

ambilPosting(1);      // ada datanya
ambilPosting(99999);  // tidak ada, untuk lihat status 404


// --- BAGIAN 4: Membuat custom error class (agak lanjutan, opsional dipahami dulu) ---

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
