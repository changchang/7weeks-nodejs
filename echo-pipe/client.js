var net = require('net');
var socket = net.connect(3000);

socket.pipe(process.stdout);
process.stdin.pipe(socket);