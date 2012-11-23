var dgram = require('dgram');
var LOCAL_BROADCAST_HOST = '224.0.0.115';
var port = 3000;

var socket = dgram.createSocket('udp4');

socket.on('message', function(msg, rinfo) {
	console.log('%s:%j - %s', rinfo.address, rinfo.port, msg.toString().trim());
});

socket.on('listening', function() {
	var address = socket.address();
	console.log('I am listening on %j', address.port);

	socket.setMulticastLoopback(true);
	socket.addMembership(LOCAL_BROADCAST_HOST);
});

socket.bind(port);

process.stdin.on('data', function(data) {
	socket.send(data, 0, data.length, port, LOCAL_BROADCAST_HOST);
});

process.stdin.resume();