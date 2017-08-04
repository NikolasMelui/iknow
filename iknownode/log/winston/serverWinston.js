/*
Тут мы просто иклюдим модуль реквеста, в котором будет прописано поведение
сервера при запросе
*/
var http = require('http');

var server = http.createServer();

server.on('request', require('./requestWinston'));


server.listen(3000);
console.log('Server is running');
