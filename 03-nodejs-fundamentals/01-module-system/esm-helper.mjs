// =========================================
// Module ES Modules - file yang di-export
// =========================================
// Di ES Modules, kita pakai "export" (sama seperti yang sudah dipelajari
// di minggu 1-2). Ekstensi file HARUS .mjs supaya Node.js tahu ini ESM,
// kecuali package.json punya "type": "module".

export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export const NAMA_MODULE = "esm-helper";
