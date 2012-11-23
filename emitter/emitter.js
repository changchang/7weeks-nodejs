var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.on('some event', function(msg) {
	console.log('I got some event: %j', msg);
});

emitter.emit('some event', 'hello');
