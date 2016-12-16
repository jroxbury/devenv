const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Command = require('./lib/commands.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
	const resultObj = req.body;
	const cmd = new Command(resultObj);

	console.log(resultObj);
	cmd.checkDirStructure();

	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('server listening on', 8080);