const EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('requets', function (request) {
  request.approved = true;
});

server.on('request', function (request) {
  console.log(request);
});

server.on('error', function () {
  console.log();
});

server.emit('request', {from: "Client one"});
server.emit('request', {from: "Client two"});
server.emit('error');
