var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// Set Static Folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('It works');
});

app.listen(3000);
console.log('Port ready on port 3000');