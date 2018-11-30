const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/test/route', { 
        target: 'http://localhost:5000' 
    }))
}