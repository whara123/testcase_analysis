const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/getData', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};
