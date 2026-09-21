// =========================================
// MINI PROJECT: Konsumsi Public API
// File ini berisi fungsi-fungsi untuk komunikasi dengan API
// =========================================
// API yang dipakai: JSONPlaceholder (https://jsonplaceholder.typicode.com)
// API publik gratis, tidak perlu API key, cocok untuk latihan

const BASE_URL = "https://jsonplaceholder.typicode.com";

// --- Definisikan bentuk data yang akan kita terima dari API ---

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// --- Custom error class, supaya error dari API bisa dibedakan dari error lain ---

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

// --- Fungsi untuk mengambil SEMUA post ---

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(BASE_URL + "/posts");

  if (!response.ok) {
    throw new ApiError("Gagal mengambil daftar postingan", response.status);
  }

  const data: Post[] = await response.json();
  return data;
}

// --- Fungsi untuk mengambil SATU post berdasarkan id ---

export async function getPostById(id: number): Promise<Post> {
  const response = await fetch(BASE_URL + "/posts/" + id);

  if (!response.ok) {
    if (response.status === 404) {
      throw new ApiError("Postingan dengan id " + id + " tidak ditemukan", 404);
    }
    throw new ApiError("Terjadi kesalahan pada server", response.status);
  }

  const data: Post = await response.json();
  return data;
}

// --- Fungsi untuk mencari post berdasarkan kata kunci di judul ---

export async function searchPosts(kataKunci: string): Promise<Post[]> {
  const semuaPost = await getAllPosts();

  return semuaPost.filter(function (post: Post): boolean {
    return post.title.toLowerCase().includes(kataKunci.toLowerCase());
  });
}
