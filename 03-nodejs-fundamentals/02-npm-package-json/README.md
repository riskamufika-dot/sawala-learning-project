# Catatan: npm & package.json

## Apa itu npm?
npm (Node Package Manager) adalah "toko aplikasi" untuk kode JavaScript —
tempat mendownload dan mengelola *package* (kode yang dibuat orang lain,
siap dipakai ulang), seperti `express`, `dotenv`, dll.

## Apa itu package.json?
File "identitas" sebuah project Node.js. Berisi:

| Field | Fungsi |
|---|---|
| `name` | Nama project |
| `version` | Versi project (format: major.minor.patch) |
| `main` | File utama yang dijalankan kalau project ini di-`require` project lain |
| `type` | `"commonjs"` (default) atau `"module"` (pakai import/export) |
| `scripts` | Daftar "perintah pintas" yang bisa dijalankan dengan `npm run <nama>` |
| `dependencies` | Package yang dibutuhkan project ini untuk BERJALAN (misal express) |
| `devDependencies` | Package yang dibutuhkan HANYA saat development (misal nodemon) |

## Perintah penting
```bash
npm init -y          # membuat package.json baru dengan nilai default
npm install express  # install package "express", otomatis masuk ke dependencies
npm install -D nodemon  # install sebagai devDependency (-D / --save-dev)
npm run start         # menjalankan script "start" di package.json
npm start              # khusus "start", boleh tanpa kata "run"
```

## package-lock.json
File ini **otomatis dibuat** saat `npm install` pertama kali — mencatat
versi PERSIS dari setiap package yang terinstall (termasuk dependency dari
dependency). Tujuannya: memastikan semua orang di tim install versi yang
SAMA PERSIS, tidak cuma "mirip-mirip".
