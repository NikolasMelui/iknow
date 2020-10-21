var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('req', function (req) {
  console.log(req);
});

server.emit('req', { data: 'Hello' });
