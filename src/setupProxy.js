
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{target:'https://carnivalapi.staging.ly/api',changeOrigin: true})),
    app.use(createProxyMiddleware('/apiMakani',{target:'https://pas.makani-api.com/public/makani', changeOrigin: true }))
<<<<<<< HEAD
    app.use(createProxyMiddleware('/apiCustomer',{target:'https://207.154.221.31/api/winners',  changeOrigin: true}))
    //app.use(createProxyMiddleware('/apiMakani',{target:'http://pas.makani-api.com/public/makani', changeOrigin: true }))
   
=======
    app.use(createProxyMiddleware('/apiCustomer',{target:'https://207.154.221.31/api/winners',changeOrigin: true}))
>>>>>>> 84f2938fbc7fa8c1eacb15b3383f3bb7ec67ffd2
}

