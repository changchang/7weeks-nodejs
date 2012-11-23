var http = require('http');
var sio = require('socket.io');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

var io = require('socket.io').listen(server);

io.set('log level', 1);

io.sockets.on('connection', function (socket) {
  socket.on('message', function (msg) {
    socket.emit('message', 'server echo:' + msg);
  });
});

server.listen(3000);
