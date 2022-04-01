require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.NODE_PORT || 8080;
const CORS = require("cors");

app.use(CORS());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json({response: 'server is running'});
});

require("./routes/index.js")(app);

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT);
});