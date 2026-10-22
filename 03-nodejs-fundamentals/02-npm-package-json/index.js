// =========================================
// LATIHAN: npm dan package.json
// =========================================
// Jalankan dengan:
//   node index.js          -> jalan langsung
//   npm start               -> jalan lewat "scripts" di package.json
//   npm run sapa             -> jalan lewat script lain

console.log("Script ini dijalankan lewat Node.js atau npm script.");
console.log("Cek argumen yang dikirim:", process.argv.slice(2));

// process.argv berisi argumen yang dikirim saat menjalankan perintah.
// Index 0 = path node, index 1 = path file ini, sisanya argumen tambahan.

if (process.argv.includes("--sapa")) {
  console.log("Halo! Ini dijalankan lewat 'npm run sapa'.");
}
