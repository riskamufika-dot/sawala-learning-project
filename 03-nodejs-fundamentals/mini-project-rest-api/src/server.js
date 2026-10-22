// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const loggerMiddleware = require('./middlewares/logger.middleware');
const articleRoutes = require('./routes/articles.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
  res.send('Server REST API Artikel berjalan.');
});

app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});