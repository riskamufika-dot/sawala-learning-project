// =========================================
// LATIHAN: Promise & Async/Await
// =========================================

// --- BAGIAN 1: Promise dasar ---

function cekUmur(umur) {
  return new Promise(function (resolve, reject) {
    if (umur >= 17) {
      resolve("Boleh masuk");
    } else {
      reject("Belum cukup umur");
    }
  });
}

// Cara lama: pakai .then() / .catch()
cekUmur(20)
  .then(function (hasil) {
    console.log("[.then] Berhasil:", hasil);
  })
  .catch(function (error) {
    console.log("[.catch] Gagal:", error);
  });

cekUmur(10)
  .then(function (hasil) {
    console.log("[.then] Berhasil:", hasil);
  })
  .catch(function (error) {
    console.log("[.catch] Gagal:", error);
  });


// --- BAGIAN 2: Versi async/await dari fungsi yang sama ---

async function jalankanCekUmur(umur) {
  try {
    const hasil = await cekUmur(umur);
    console.log("[async/await] Berhasil:", hasil);
  } catch (error) {
    console.log("[async/await] Gagal:", error);
  }
}

jalankanCekUmur(25);
jalankanCekUmur(8);


// --- BAGIAN 3: Simulasi proses yang butuh waktu (pakai setTimeout) ---

function ambilDataSimulasi() {
  return new Promise(function (resolve) {
    console.log("Mulai mengambil data...");
    setTimeout(function () {
      resolve({ id: 1, nama: "Data Simulasi" });
    }, 1500); // butuh 1.5 detik
  });
}

async function tampilkanData() {
  const data = await ambilDataSimulasi(); // baris ini "menunggu" 1.5 detik
  console.log("Data diterima:", data);
}

tampilkanData();
console.log("Baris ini muncul duluan, sebelum data siap!");


// --- BAGIAN 4: Beberapa Promise berurutan (chaining) ---

function langkah1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Langkah 1 selesai");
    }, 500);
  });
}

function langkah2(pesanSebelumnya) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(pesanSebelumnya + " -> Langkah 2 selesai");
    }, 500);
  });
}

async function jalankanBerurutan() {
  const hasil1 = await langkah1();
  const hasil2 = await langkah2(hasil1);
  console.log("Hasil akhir:", hasil2);
}

jalankanBerurutan();
