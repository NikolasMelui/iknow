const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let ROOT = __dirname + '/public';

http.createServer((req, res) => {
  if(!checkAccess(req)) {
    res.statusCode = 403;
    res.end('Tell me secret key!');
    return;
  }
  sendFileSafe(url.parse(req.url).pathname, res);
}).listen(3000);

// Функция-заглушка для проверки доступа до файла '?secret=o_O'
let checkAccess = (req) => { return url.parse(req.url, true).query.secret == 'o_O'; }

let sendFileSafe = (filePath, res) => {

  // Проверка на корректность урла, декодируем его и смотрим
  try {
    filePath = decodeURIComponent(filePath);
  } catch (e) {
    res.statusCode = 400;
    res.end('Bad request11!');
    return;
  }

  //Проверка на корректность запроса (отсутствие нулевого байта)
  if (~filePath.indexOf('\0')) {
    res.statusCode = 400;
    res.end('Bad request!');
    return;
  }

  // Приводим путь до файла к грамотному виду
  filePath = path.normalize(path.join(ROOT, filePath));

  // Проверка на запрос правильного пути
  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end('File not found1');
    return;
  }

  // Проверка на 'есть ли файл и файл ли это'
  fs.stat(filePath, (err, stats) => {
    if(err || !stats.isFile()) {
    res.statusCode = 404;
    res.end('File not found');
    return;
    }

    let file = new fs.ReadStream(filePath);
    console.log('seccess');
    sendFile(file, res);
    var cat = new Object();
    console.log(cat);
  });
}

let sendFile = (file, res) => {

  file.pipe(res);

  file.on('error', function (err) {
    res.statusCode = 500;
    res.end('Server Error');
    console.log(err);
  });

    file.on('open', function () {
      console.log('open');
    });
    file.on('close', function () {
      console.log('close');
    });

    res.on('close', function () {
      file.destroy();
    });

  }
