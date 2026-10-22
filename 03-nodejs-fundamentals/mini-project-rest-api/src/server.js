const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const loggerMiddleware = require('./middlewares/logger.middleware');
const articleRoutes = require('./routes/articles.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
  res.send('Server REST API Artikel berjalan.');
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});