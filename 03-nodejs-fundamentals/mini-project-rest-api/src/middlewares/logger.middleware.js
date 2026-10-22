// src/middlewares/logger.middleware.js
const loggerMiddleware = (req, res, next) => {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = loggerMiddleware;