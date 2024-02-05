const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');

//routes
app.use('/', apiRouter);

//starting server listening on port 3000
app.listen(port, function () {
    console.log('server listening on port 3000');
})