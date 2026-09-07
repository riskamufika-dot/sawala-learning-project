function cekKelulusan(nilai) {
  if (nilai >= 70) {
    return "Lulus";
  } else {
    return "Tidak lulus";
  }
}

console.log(cekKelulusan(80));
console.log(cekKelulusan(50));

function nilaiHuruf(nilai) {
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 60) {
    return "B";
  } else {
    return "C";
  }
}

console.log(nilaiHuruf(85));
console.log(nilaiHuruf(65));
console.log(nilaiHuruf(40));




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

console.log(kalkulator(10, 5, "+"));
console.log(kalkulator(10, 5, "-"));
console.log(kalkulator(10, 5, "*"));
console.log(kalkulator(10, 5, "/"));
console.log(kalkulator(10, 0, "/"));
console.log(kalkulator(10, 5, "%")); 
