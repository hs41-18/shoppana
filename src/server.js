const express = require('express');
const app = new express();

require('./routes/testRoutes')(app);

const port = process.env.port || 5000;
app.listen(port);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}