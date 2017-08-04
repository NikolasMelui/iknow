/*
В подключаемых файлах необходимо также указывать идентификатор, но уже с
идентификатором главного файла через точку с запятой
*/
var url = require('url');
const debug = require('debug')('server:request');

module.exports = function (req, res) {
  var urlParsed = url.parse(req.url, true);

  debug('Got request', req.method, req.url);

  if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
    var message = urlParsed.query.message;
    debug('Echo: ' + message);
    res.end(message);
    return;
  }

  debug('Unknown URL');

  res.statusCode = 404;
  res.end('Not Found');
};
