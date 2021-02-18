
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{target:'https://carnivalapi.staging.ly/api',changeOrigin: true})),
    app.use(createProxyMiddleware('/apiMakani',{target:'https://pas.makani-api.com/public/makani', changeOrigin: true }))
    app.use(createProxyMiddleware('/apiCustomer',{target:'https://api.winner2021.ly/api/winners',  changeOrigin: true}))
    //app.use(createProxyMiddleware('/apiMakani',{target:'http://pas.makani-api.com/public/makani', changeOrigin: true }))
   
}

