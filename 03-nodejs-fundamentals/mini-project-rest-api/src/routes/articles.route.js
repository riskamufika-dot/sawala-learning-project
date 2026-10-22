// src/routes/articles.route.js
const express = require('express');
const router = express.Router();
const {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articles.controller');

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;