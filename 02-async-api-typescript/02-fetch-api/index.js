// Fetch dasar dengan .then()

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {

    return response.json();
  })
  .then(function (data) {
    console.log("[.then] Data user:", data.name, "-", data.email);
  })
  .catch(function (error) {
    console.log("[.then] Terjadi error:", error);
  });


// Fetch dengan async/await (lebih ringkas)

async function ambilUser(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await response.json();
    console.log("[async/await] Data user:", data.name, "-", data.company.name);
  } catch (error) {
    console.log("[async/await] Terjadi error:", error);
  }
}

ambilUser(2);


// Mengecek response.ok (penting untuk error handling)

async function ambilUserDenganValidasi(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);


    if (!response.ok) {
      throw new Error("Gagal mengambil data, status: " + response.status);
    }

    const data = await response.json();
    console.log("[validasi] Data user:", data.name);
  } catch (error) {
    console.log("[validasi] Error:", error.message);
  }
}

ambilUserDenganValidasi(3);
ambilUserDenganValidasi(9999);


// Mengambil banyak data sekaligus (array of data)

async function ambilSemuaUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("\n[semua user] Total user:", data.length);


    const semuaNama = data.map(function (user) {
      return user.name;
    });
    console.log("[semua user] Nama-nama:", semuaNama);
  } catch (error) {
    console.log("[semua user] Error:", error.message);
  }
}

ambilSemuaUser();
