/*define the API URLs by using ProxyMiddleware library 
to prevent CORS errors */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{target:'https://carnivalapi.staging.ly/api',changeOrigin: true})),
    app.use(createProxyMiddleware('/apiCustomer',{target:'https://api.winner2021.ly/api/winners',  changeOrigin: true}))  
}

