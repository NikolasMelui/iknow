/*
Устанавливаем nodemon глобально через npm
Стартуем сервер как 'nodemon' с флагом '--inspect-brk'
nodemon --inspect-brk serverWinston.js
Можно стартовать сервер с флагом '--inspect', но в этом случае при
работе скрипта без явных ошибок мы не сможем произвести нормальный дебаг

После этого Google Chrome автоматически запускает вкладку для отладки
через NIM плагин
Нам же остаётся только перейти на указанный нами порт прослушиваемого
сервера и смотреть на вывод
*/
var http = require('http');
var url = require('url');

var server = http.createServer();
server.on('request', function (req, res) {
  var urlParsed = url.parse(req.url, true);
  // debugger;

  if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message);
    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

server.listen(3000);
console.log('Server is running');
