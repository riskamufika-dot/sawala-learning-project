# Mini Project: REST API Artikel

REST API sederhana untuk CRUD (Create, Read, Update, Delete) data artikel,
dibuat menggunakan Node.js dan Express. Data disimpan sementara di memori
(array), bukan database sungguhan — khusus untuk latihan.

## Cara Menjalankan

1. Install dependency (sekali saja):
   ```bash
   npm install
   ```

2. Pastikan file `.env` sudah ada (sudah disediakan, isinya `PORT=3000`).
   Kalau tidak ada, salin dari `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Jalankan server:
   ```bash
   npm start
   ```
   atau, kalau sudah install nodemon dan ingin server otomatis restart
   setiap ada perubahan kode:
   ```bash
   npm run dev
   ```

4. Server berjalan di: `http://localhost:3000`

## Daftar Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/` | Cek server hidup |
| GET | `/articles` | Ambil semua artikel |
| GET | `/articles/:id` | Ambil satu artikel berdasarkan id |
| POST | `/articles` | Tambah artikel baru |
| PUT | `/articles/:id` | Ubah artikel yang sudah ada |
| DELETE | `/articles/:id` | Hapus artikel |

## Cara Testing dengan Postman / Thunder Client

### 1. GET semua artikel
- Method: `GET`
- URL: `http://localhost:3000/articles`
- Tidak perlu body

### 2. GET satu artikel
- Method: `GET`
- URL: `http://localhost:3000/articles/1`

### 3. POST artikel baru
- Method: `POST`
- URL: `http://localhost:3000/articles`
- Body (raw, JSON):
  ```json
  {
    "judul": "Judul Artikel Baru",
    "isi": "Isi dari artikel baru ini.",
    "penulis": "Nama Kamu"
  }
  ```

### 4. PUT ubah artikel
- Method: `PUT`
- URL: `http://localhost:3000/articles/1`
- Body (raw, JSON) — kirim hanya field yang mau diubah:
  ```json
  {
    "judul": "Judul yang sudah diubah"
  }
  ```

### 5. DELETE artikel
- Method: `DELETE`
- URL: `http://localhost:3000/articles/1`
- Tidak perlu body

## Struktur Folder

```
mini-project-rest-api/
├── src/
│   ├── routes/articles.route.js        -> peta URL ke controller
│   ├── controllers/articles.controller.js -> logika CRUD
│   ├── middlewares/logger.middleware.js   -> logging tiap request
│   ├── data/articles.data.js              -> "database" sementara (array)
│   └── server.js                           -> entry point, setup Express
├── .env            -> variabel environment (PORT, dll)
├── .env.example    -> contoh isi .env (aman di-commit ke git)
└── package.json
