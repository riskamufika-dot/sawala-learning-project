// =========================================
// Routes: Articles
// =========================================
// Route menentukan: "kalau ada request masuk ke URL ini dengan method
// ini, jalankan function controller yang mana". Route TIDAK berisi
// logika, hanya "peta jalan" ke controller yang sesuai.

const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles.controller");

// Setiap baris di bawah ini menghubungkan: METHOD + URL -> CONTROLLER
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
