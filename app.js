var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function (socket) {
	socket.on('send', function (data) {
		socket.emit('get2', {data:"data"});
	});
});

var port = 3000;
server.listen(port);