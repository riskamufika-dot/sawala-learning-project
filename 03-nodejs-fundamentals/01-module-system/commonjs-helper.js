// =========================================
// Module CommonJS - file yang di-export
// =========================================
// Di CommonJS, kita pakai module.exports untuk "mengekspos" sesuatu
// supaya bisa dipakai file lain lewat require()

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

const NAMA_MODULE = "commonjs-helper";

// module.exports bisa berupa object, berisi beberapa hal sekaligus
module.exports = {
  tambah,
  kurang,
  NAMA_MODULE,
};
