var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var form = require('./js/form.js');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
	var resultObj = req.body;

	form.checkDirStructure(resultObj);

	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('server listening on', 8080);