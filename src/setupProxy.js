
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{target:'https://carnivalapi.staging.ly/api'})),
    app.use(createProxyMiddleware('/apiMakani',{target:'http://pas.makani-api.com/public/makani', changeOrigin: true }))
    app.use(createProxyMiddleware('/apiCustomer',{target:'http://10.20.0.103:81/api/Winners', changeOrigin: true }))
}

