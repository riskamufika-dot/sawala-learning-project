# Mini Project: Admin Dashboard (React + TypeScript)

Projek ini dibangunkan sebagai sebahagian daripada pembelajaran Minggu 7–8: React Fundamentals & TypeScript Component Architecture. Dashboard ini disambungkan terus dengan backend REST API Express untuk pengurusan data artikel.

## Capaian Pembelajaran & Senarai Semak Tugas
- [x] JSX & Seni Bina Komponen: Menggunakan komponen modular (Header, Card, Button, ArticleForm).
- [x] Props & TypeScript Interfaces: Penggunaan jenis data selamat (HeaderProps, CardProps, ButtonProps, Article).
- [x] Pengurusan State: Menggunakan useState untuk interaksi kaunter dan borang.
- [x] Pengendalian Acara: Mengendalikan klik butang dan penghantaran borang (onSubmit & onClick).
- [x] Kitaran Hayat & Pengambilan Data: Menggunakan useEffect untuk memuatkan artikel daripada Express API.
- [x] Paparan Bersyarat & Senarai: Menunjukkan status pemuatan, ralat, serta pemetaan senarai artikel.
- [x] Integrasi CRUD Lengkap: GET, POST, dan DELETE artikel melalui REST API.
- [x] Aliran Kerja Git: Bekerja pada cawangan feat/minggu-7-8 dan kemas kini dokumentasi.

## Struktur Komponen
src/
├── components/
│   ├── ArticleForm.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Header.tsx
├── types/
│   └── index.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx

## Panduan Menjalankan Projek

1. Jalankan Backend (Express API di Port 5001):
cd 03-nodejs-fundamentals/mini-project-rest-api
npm install
npm run dev

2. Jalankan Frontend (React Vite di Port 5173):
cd 04-react-fundamentals/mini-project-react-dashboard
npm install
npm run dev

Akses aplikasi di penyemak imbas melalui alamat: http://localhost:5173/

## Titik Akhir API (Endpoints)
- GET /api/articles : Mengambil senarai artikel
- POST /api/articles : Menambah artikel baharu
- DELETE /api/articles/:id : Memadam artikel mengikut ID