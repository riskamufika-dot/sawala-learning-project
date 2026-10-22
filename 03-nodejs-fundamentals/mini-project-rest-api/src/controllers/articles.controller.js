let articles = [
  { id: 1, title: 'Belajar Node.js', content: 'Dasar runtime dan event loop.' },
  { id: 2, title: 'Mengenal Express', content: 'Membuat web server sederhana.' }
];

const getAllArticles = (req, res) => {
  res.status(200).json({
    success: true,
    data: articles
  });
};

const getArticleById = (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: 'Artikel tidak ditemukan'
    });
  }

  res.status(200).json({
    success: true,
    data: article
  });
};

const createArticle = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: 'Title dan content wajib diisi'
    });
  }

  const newArticle = {
    id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 1,
    title,
    content
  };

  articles.push(newArticle);

  res.status(201).json({
    success: true,
    message: 'Artikel berhasil ditambahkan',
    data: newArticle
  });
};

const updateArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const index = articles.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Artikel tidak ditemukan'
    });
  }

  articles[index] = {
    ...articles[index],
    title: title || articles[index].title,
    content: content || articles[index].content
  };

  res.status(200).json({
    success: true,
    message: 'Artikel berhasil diperbarui',
    data: articles[index]
  });
};

const deleteArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const index = articles.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Artikel tidak ditemukan'
    });
  }

  const deleted = articles.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Artikel berhasil dihapus',
    data: deleted[0]
  });
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
};