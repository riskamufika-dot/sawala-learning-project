// =========================================
// LATIHAN: ES Modules - file yang di-export (SOLUSI)
// =========================================

// 1 & 2 & 3: export biasa, boleh banyak per file
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export const PI = 3.14;

// 4: export default, cuma boleh SATU per file
export default function kali(a, b) {
  return a * b;
}
