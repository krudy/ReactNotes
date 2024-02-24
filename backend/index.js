const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

//database
require('./db/mongoose');

//parsers
//content-type: application/json
app.use(bodyParser.json());

// fix cors
app.use(cors());    

//routes
app.use('/api/', apiRouter);

//starting server listening on port 3000
app.listen(port, function () {
    console.log('server listening on port 3000');
})