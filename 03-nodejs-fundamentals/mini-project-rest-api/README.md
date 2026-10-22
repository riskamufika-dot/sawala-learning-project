# Mini Project: REST API Artikel

REST API sederhana untuk manajemen data artikel menggunakan Express.js.

## Cara Menjalankan Server

1. Masuk ke folder project:
   \`\`\`bash
   cd 03-nodejs-fundamentals/mini-project-rest-api
   \`\`\`
2. Pasang dependensi:
   \`\`\`bash
   npm install
   \`\`\`
3. Siapkan environment file:
   Salin file `.env.example` menjadi `.env`.
4. Jalankan server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Daftar Endpoint

- `GET /api/articles` : Mengambil semua artikel
- `GET /api/articles/:id` : Mengambil detail satu artikel
- `POST /api/articles` : Menambahkan artikel baru (Body: JSON `{ "title": "...", "content": "..." }`)
- `PUT /api/articles/:id` : Mengubah data artikel
- `DELETE /api/articles/:id` : Menghapus artikel