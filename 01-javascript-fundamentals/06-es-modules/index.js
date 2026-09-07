// =========================================
// LATIHAN: ES Modules - file yang meng-import (SOLUSI)
// =========================================
// Agar import/export bisa jalan di Node.js, tambahkan
// "type": "module" di package.json folder ini (atau root project)

// export biasa harus pakai { } dan nama harus sama persis
import { tambah, kurang, PI } from "./math.js";

// export default TIDAK pakai { }, dan boleh diberi nama bebas
import perkalian from "./math.js";

console.log("Hasil tambah:", tambah(5, 3));   // 8
console.log("Hasil kurang:", kurang(5, 3));   // 2
console.log("Nilai PI:", PI);                 // 3.14
console.log("Hasil kali:", perkalian(5, 3));  // 15
