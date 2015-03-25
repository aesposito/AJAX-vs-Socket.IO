var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/get', function(req, res){
  res.json({"data": "data"});
});

io.on('connection', function (socket) {
	socket.on('send', function (data) {
		socket.emit('get', {data:"data"});
	});
});

var port = 3000;
server.listen(port);