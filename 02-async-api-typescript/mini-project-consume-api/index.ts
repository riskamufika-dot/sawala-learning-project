// =========================================
// MINI PROJECT: Konsumsi Public API
// File ini mensimulasikan state: loading, error, data
// (Nanti di minggu 7-8, pola state ini akan dipakai langsung di React
//  dengan useState. Untuk sekarang, kita simulasikan dengan console.log
//  supaya konsepnya sudah familiar duluan.)
// =========================================

import { getAllPosts, getPostById, searchPosts, ApiError, Post } from "./api";

// --- Definisikan bentuk "state" seperti yang nanti dipakai di React ---

interface AppState {
  loading: boolean;
  error: string | null;
  data: Post[] | null;
}

let state: AppState = {
  loading: false,
  error: null,
  data: null,
};

// Fungsi untuk "menampilkan" state saat ini (simulasi render UI)
function tampilkanState(state: AppState): void {
  console.log("\n--- STATE SAAT INI ---");
  console.log("Loading:", state.loading);
  console.log("Error:", state.error);
  console.log("Data:", state.data ? state.data.length + " item" : null);
}

// --- Simulasi alur: loading -> berhasil / gagal ---

async function muatSemuaPostingan(): Promise<void> {
  // 1. Set loading jadi true SEBELUM mulai fetch
  state = { loading: true, error: null, data: null };
  tampilkanState(state);

  try {
    // 2. Ambil data dari API
    const posts = await getAllPosts();

    // 3. Kalau berhasil: loading jadi false, data diisi
    state = { loading: false, error: null, data: posts };
    tampilkanState(state);
  } catch (error) {
    // 4. Kalau gagal: loading jadi false, error diisi
    const pesanError = error instanceof ApiError ? error.message : "Terjadi kesalahan tidak terduga";
    state = { loading: false, error: pesanError, data: null };
    tampilkanState(state);
  }
}

// --- Simulasi alur untuk kasus GAGAL (id tidak ada) ---

async function muatPostinganTidakAda(): Promise<void> {
  state = { loading: true, error: null, data: null };
  tampilkanState(state);

  try {
    const post = await getPostById(999999); // id sengaja tidak ada
    state = { loading: false, error: null, data: [post] };
    tampilkanState(state);
  } catch (error) {
    const pesanError = error instanceof ApiError ? error.message : "Terjadi kesalahan tidak terduga";
    state = { loading: false, error: pesanError, data: null };
    tampilkanState(state);
  }
}

// --- Simulasi pencarian ---

async function cariPostingan(kataKunci: string): Promise<void> {
  state = { loading: true, error: null, data: null };
  tampilkanState(state);

  try {
    const hasil = await searchPosts(kataKunci);
    state = { loading: false, error: null, data: hasil };
    tampilkanState(state);
    console.log("Judul yang ditemukan:", hasil.map((p) => p.title).slice(0, 3));
  } catch (error) {
    const pesanError = error instanceof ApiError ? error.message : "Terjadi kesalahan tidak terduga";
    state = { loading: false, error: pesanError, data: null };
    tampilkanState(state);
  }
}

// --- Jalankan semua simulasi secara berurutan ---

async function main(): Promise<void> {
  console.log("=== 1. Memuat semua postingan ===");
  await muatSemuaPostingan();

  console.log("\n=== 2. Mencoba memuat postingan yang tidak ada (simulasi error) ===");
  await muatPostinganTidakAda();

  console.log("\n=== 3. Mencari postingan dengan kata kunci 'et' ===");
  await cariPostingan("et");
}

main();
