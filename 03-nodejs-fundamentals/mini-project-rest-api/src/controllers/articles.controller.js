// =========================================
// Controller: Articles
// =========================================
// Controller berisi LOGIKA untuk tiap endpoint — apa yang harus
// dilakukan ketika suatu request masuk. Route hanya "mengarahkan",
// controller yang benar-benar mengerjakan tugasnya.

const { getArticles, setArticles, getNextId } = require("../data/articles.data");

// GET /articles - ambil SEMUA artikel
function getAllArticles(req, res) {
  const articles = getArticles();
  res.status(200).json({
    success: true,
    total: articles.length,
    data: articles,
  });
}

// GET /articles/:id - ambil SATU artikel berdasarkan id
function getArticleById(req, res) {
  const id = Number(req.params.id);
  const articles = getArticles();
  const artikel = articles.find(function (item) {
    return item.id === id;
  });

  if (!artikel) {
    return res.status(404).json({
      success: false,
      message: "Artikel dengan id " + id + " tidak ditemukan",
    });
  }

  res.status(200).json({ success: true, data: artikel });
}

// POST /articles - tambah artikel baru
function createArticle(req, res) {
  const { judul, isi, penulis } = req.body;

  // Validasi sederhana: judul dan isi wajib diisi
  if (!judul || !isi) {
    return res.status(400).json({
      success: false,
      message: "Field 'judul' dan 'isi' wajib diisi",
    });
  }

  const articles = getArticles();
  const artikelBaru = {
    id: getNextId(),
    judul,
    isi,
    penulis: penulis || "Anonim",
  };

  articles.push(artikelBaru);
  setArticles(articles);

  res.status(201).json({ success: true, data: artikelBaru });
}

// PUT /articles/:id - ubah artikel yang sudah ada
function updateArticle(req, res) {
  const id = Number(req.params.id);
  const articles = getArticles();
  const index = articles.findIndex(function (item) {
    return item.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Artikel dengan id " + id + " tidak ditemukan",
    });
  }

  const { judul, isi, penulis } = req.body;

  // Hanya update field yang dikirim, field lain tetap seperti semula
  articles[index] = {
    ...articles[index],
    judul: judul || articles[index].judul,
    isi: isi || articles[index].isi,
    penulis: penulis || articles[index].penulis,
  };

  setArticles(articles);
  res.status(200).json({ success: true, data: articles[index] });
}

// DELETE /articles/:id - hapus artikel
function deleteArticle(req, res) {
  const id = Number(req.params.id);
  const articles = getArticles();
  const index = articles.findIndex(function (item) {
    return item.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Artikel dengan id " + id + " tidak ditemukan",
    });
  }

  const artikelTerhapus = articles[index];
  articles.splice(index, 1);
  setArticles(articles);

  res.status(200).json({
    success: true,
    message: "Artikel berhasil dihapus",
    data: artikelTerhapus,
  });
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
