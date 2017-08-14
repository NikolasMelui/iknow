const http = require('http');
var opts = (require('optimist').argv);

http.createServer((req, res) => res.end('The server is running')).listen(opts.port);
