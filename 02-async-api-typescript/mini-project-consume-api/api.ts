
const BASE_URL = "https://jsonplaceholder.typicode.com";


export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}


export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}


export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(BASE_URL + "/posts");

  if (!response.ok) {
    throw new ApiError("Gagal mengambil daftar postingan", response.status);
  }

  const data: Post[] = await response.json();
  return data;
}


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


export async function searchPosts(kataKunci: string): Promise<Post[]> {
  const semuaPost = await getAllPosts();

  return semuaPost.filter(function (post: Post): boolean {
    return post.title.toLowerCase().includes(kataKunci.toLowerCase());
  });
}
