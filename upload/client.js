var net = require('net');
var fs = require('fs');

var filename = process.argv[2];

var socket = net.connect(3000);

socket.on('connect', function() {

	// 打开read stream后监听'data'事件即可获得数据
	var rstream = fs.createReadStream(filename);

	rstream.on('data', function(data) {
		socket.write(data);
		console.log('send %j bytes', data.length);
	});

	rstream.on('end', function() {
		socket.end();
		console.log('upload finished.');
	});
	
});

