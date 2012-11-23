var net = require('net');
var fs = require('fs');

var filename = process.argv[2];

var socket = net.connect(3000);

socket.on('connect', function() {
	var rstream = fs.createReadStream(filename);
	rstream.pipe(socket);
	socket.on('close', function() {
		console.log('upload finished.');
	});
});

