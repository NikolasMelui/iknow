const http = require('http');
var opts = (require('optimist').argv);
// Чтобы запустить сервер на нужном нам порту из командной строки под нодемоном для динамической разработки там нужно применить следующие флаги
// nodemon --inspect-brk -- server.js --port=3000
http.createServer((req, res) => res.end('The server is running')).listen(opts.port);
