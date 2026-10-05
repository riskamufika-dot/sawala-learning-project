// =========================================
// LATIHAN: Module System - ES Modules
// =========================================
// Jalankan dengan: node esm-demo.mjs
// (file ini TERPISAH dari index.js karena mencampur CommonJS dan ESM
//  dalam satu file yang sama itu tidak bisa langsung dilakukan)

import { tambah, kurang, NAMA_MODULE } from "./esm-helper.mjs";

console.log("=== Module System - ES Modules (import/export) ===");
console.log("Dari esm-helper.mjs:", NAMA_MODULE);
console.log("tambah(10, 4) =", tambah(10, 4));
console.log("kurang(10, 4) =", kurang(10, 4));

console.log("\n--- Perbandingan CommonJS vs ES Modules ---");
console.log("CommonJS   : const helper = require('./file.js')");
console.log("ES Modules : import { sesuatu } from './file.mjs'");
console.log("");
console.log("CommonJS   : module.exports = { ... }");
console.log("ES Modules : export function/const ...");
