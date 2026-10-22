# Backend - Strapi CMS (Minggu 9–10)

Layanan backend Headless CMS berbasis Strapi v5 untuk manajemen data artikel blog dan penyedia endpoint REST API.

## Tech Stack
- Strapi CMS v5
- SQLite

## Skema Data Article
- title
- slug
- content
- description
- author
- category
- publishedDate

## Cara Menjalankan
- cd backend-strapi
- npm install
- npm run develop
- Panel Admin di http://localhost:1337/admin

## Endpoint REST API
- Semua artikel: GET http://localhost:1337/api/articles?populate=*
- Filter slug: GET http://localhost:1337/api/articles?filters[slug][$eq]={slug}&populate=*