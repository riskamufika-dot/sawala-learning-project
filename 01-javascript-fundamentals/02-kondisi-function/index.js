// =========================================
// LATIHAN: Kondisi (if/else) & Function (SOLUSI)
// MINI EXERCISE: Kalkulator Sederhana
// =========================================

// --- BAGIAN 1: Latihan kondisi dasar ---

function cekKelulusan(nilai) {
  if (nilai >= 70) {
    return "Lulus";
  } else {
    return "Tidak lulus";
  }
}

console.log(cekKelulusan(80)); // "Lulus"
console.log(cekKelulusan(50)); // "Tidak lulus"

function nilaiHuruf(nilai) {
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 60) {
    return "B";
  } else {
    return "C";
  }
}

console.log(nilaiHuruf(85)); // "A"
console.log(nilaiHuruf(65)); // "B"
console.log(nilaiHuruf(40)); // "C"


// --- BAGIAN 2: Mini Exercise - Kalkulator Sederhana ---

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  // cek dulu SEBELUM membagi, supaya tidak error/Infinity
  if (b === 0) {
    return "Tidak bisa dibagi nol";
  }
  return a / b;
}

function kalkulator(a, b, operator) {
  if (operator === "+") {
    return tambah(a, b);
  } else if (operator === "-") {
    return kurang(a, b);
  } else if (operator === "*") {
    return kali(a, b);
  } else if (operator === "/") {
    return bagi(a, b);
  } else {
    return "Operator tidak valid";
  }
}

console.log(kalkulator(10, 5, "+")); // 15
console.log(kalkulator(10, 5, "-")); // 5
console.log(kalkulator(10, 5, "*")); // 50
console.log(kalkulator(10, 5, "/")); // 2
console.log(kalkulator(10, 0, "/")); // "Tidak bisa dibagi nol"
console.log(kalkulator(10, 5, "%")); // "Operator tidak valid"
