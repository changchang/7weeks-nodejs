var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
	var wstream = fs.createWriteStream('/tmp/tmp-' + Date.now());
	socket.pipe(wstream);
	wstream.on('close', function() {
		console.log('receive finished.');
	});
});

server.listen(3000, function() {
	console.log('upload server listen on 3000 now');
});