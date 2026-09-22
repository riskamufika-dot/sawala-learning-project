# Sawala Learning Project

Repository ini berisi progres belajar saya, mulai dari dasar JavaScript
sampai ke Next.js dan Strapi (final project). Setiap minggu materi
disimpan dalam folder terpisah agar mudah ditelusuri.

## Progres

- [x] Minggu 1-2: JavaScript Fundamentals
- [x] Minggu 3-4: Async, Fetch API, TypeScript Basic
- [ ] Minggu 5-6: Node.js Fundamentals
- [ ] Minggu 7-8: React Fundamentals
- [ ] Minggu 9-10: Next.js + Strapi (Final Project)

## Struktur Folder

```
01-javascript-fundamentals/     Minggu 1-2
02-async-api-typescript/        Minggu 3-4
03-nodejs-fundamentals/         Minggu 5-6
04-react-fundamentals/          Minggu 7-8
05-nextjs-strapi-final-project/ Minggu 9-10 (Final Project)
```

## Cara Menjalankan

Sebagian besar file di minggu 1-2 adalah file JavaScript murni yang bisa
dijalankan langsung dengan Node.js:

```bash
node 01-javascript-fundamentals/01-variabel-tipe-data/index.js
```

Untuk folder `06-es-modules` dan `mini-project-produk-list` yang memakai
`import`/`export`, pastikan sudah ada `package.json` dengan
`"type": "module"` di folder tersebut (atau di root project).

Untuk file TypeScript (`.ts`) di folder `02-async-api-typescript`,
jalankan lewat `tsx` (sudah terdaftar sebagai dev dependency). Install
dulu dependency-nya sekali di root project:

```bash
npm install
```

Lalu jalankan file `.ts` dengan:

```bash
npx tsx 02-async-api-typescript/04-typescript-basic/index.ts
npx tsx 02-async-api-typescript/mini-project-consume-api/index.ts
```

File yang butuh koneksi internet (memakai `fetch`) membutuhkan koneksi
aktif karena mengambil data dari API publik JSONPlaceholder
(https://jsonplaceholder.typicode.com).

## Catatan Belajar

### Minggu 1-2: JavaScript Fundamentals
Materi yang dipelajari: variabel (let/const), tipe data, kondisi
(if/else), function, object & array, debugging dasar, looping & array
methods (map/filter/find/forEach/reduce), destructuring & spread
operator, serta ES Modules (import/export).

### Minggu 3-4: Async, Fetch API, TypeScript Basic
Materi yang dipelajari: Promise dan async/await, Fetch API untuk
mengambil data dari server, dasar HTTP (method, status code) dan
format JSON, error handling (try/catch/finally, custom error class),
serta TypeScript basic (type, interface, type untuk function dan
Promise). Mini project: konsumsi public API dengan simulasi state
loading/error/data menggunakan TypeScript.
