const http = require('http');
console.log(process.argv);

http.createServer((req, res) => res.end('The server is running')).listen(3000);
