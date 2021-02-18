
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{target:'https://carnivalapi.staging.ly/api'})),
    app.use(createProxyMiddleware('/apiMakani',{target:'https://pas.makani-api.com/public/makani', changeOrigin: true }))
    app.use(createProxyMiddleware('/apiCustomer',{target:'https://207.154.221.31/api/winners',  changeOrigin: true}))
    //app.use(createProxyMiddleware('/apiMakani',{target:'http://pas.makani-api.com/public/makani', changeOrigin: true }))
   
}

