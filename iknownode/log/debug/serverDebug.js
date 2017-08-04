/*
После подключения модуля ему нужно указать идентификатор, которым модуль
будет помечать весь вывод из данного файла

Для запуска полного дебага исполняемых файлов используется
переменная окружения с идентификаторами (или символ-звездочка)
DEBUG=server:*

Все же файлы перечисляются через запятую
DEBUG=server,server:*
*/
var http = require('http');
var debug = require('debug')('server');

var server = http.createServer();

server.on('request', require('./requestDebug'));


server.listen(3000);
debug('Server is running');
