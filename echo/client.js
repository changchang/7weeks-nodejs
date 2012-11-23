var net = require('net');
var socket = net.connect(3000);

socket.on('data', function(data) {
	// 新数据到达的回调
	console.log(data.toString().trim());
});

socket.on('connect', function() {
	// 连接成功后的回调
	process.stdin.on('data', function(data) {
		// 标准输入有输入的回调
		socket.write(data);
	});

	process.stdin.resume();
});

