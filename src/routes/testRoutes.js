module.exports = (app) => {
    app.get('/test/route', (req, res) => {
        res.send('Hello World!');
    });
}