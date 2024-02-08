const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//database
require('./db/mongoose');

//parsers
//content-type: application/json
app.use(bodyParser.json());

//routes
app.use('/api/', apiRouter);

//starting server listening on port 3000
app.listen(port, function () {
    console.log('server listening on port 3000');
})