var net = require('net');
var server = net.createServer();

server.on('connection', function(socket) {
	// 有新连接时触发的回调
	socket.on('data', function(data) {
		// 连接上有新数据到达时触发的回调
		console.log(data.toString().trim());
		socket.write(data);
	});
});

server.listen(3000, function() {
	// 监听端口成功后的回调
	console.log('echo server listen on 3000 now');
});

