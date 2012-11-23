var fs = require('fs');

var fd = fs.openSync('d:/tmp-' + Date.now(), 'w');

var count = 10;
var bufs = [];
for(var i=0; i<count; i++) {
	bufs[i] = new Buffer(str(i, 1000));
}

var buf;
for(var i = 0; i < count; i++) {
	buf = bufs[i];
	fs.write(fd, buf, 0, buf.length);
}

setTimeout(function() {
	fs.closeSync(fd);
}, 5000);


function str(num, size) {
	var res = '';
	for(var i=0; i<size; i++) {
		res += num;
	}
	return res;
}
