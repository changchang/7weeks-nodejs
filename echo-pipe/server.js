var net = require('net');
var server = net.createServer();

server.on('connection', function(socket) {
	socket.pipe(process.stdout);
	socket.pipe(socket);
});

server.listen(3000, function() {
	console.log('echo server listening on 3000.');
});