var http = require('http');

var server = new http.Server();

server.listen(3000, '127.0.0.1');

var count = 0;

var emit = server.emit;
server.emit = function (event) {
  console.log(event);
  emit.apply(server, arguments);
};

server.on('request', function (req, res) {
  res.end('Up to ' + ++count);
});
