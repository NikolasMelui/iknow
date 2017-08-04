/*
Чтобы запустить скрипт в режиме отладки необходимо прописать запуск
с флагом 'debug'
node debug server.js

В режиме отладки флаг 'help' показывает команды для работы с отладчиком

Команда cont продолжает выполнение скрипта после точки остановки

Команда repl включает режим ввода команд в консоль для отладки
*/
var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function (req, res) {
  var urlParsed = url.parse(req.url, true);
  debugger; // Turn on DEBUG mode

  if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message);
    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

server.listen(3000);
console.log('Server is running');
