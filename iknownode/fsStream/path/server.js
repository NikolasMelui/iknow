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
  });
}

let sendFile = (file, res) => {

  let write = () => {
  let fileContent = file.read(); // Считывать данные после получения
    if(fileContent && !res.write(fileContent)) { // Если подключение быстрое и устойчивое отправляем данные в ответ
      file.removeListener('readable', write);
      res.once('drain', () => { // При необходимости подождать
        file.on('readable', write); // Продолжить запись в файл
        write(); // начать писать новый кусок (и так пока файл не кончится)
      });
    }
  }
  file.on('readable', write); // Ждём данные от сервера
  file.on('end', () => res.end());
}

// Неправильный (безпоточный) способ полностью прочитать файл и вывести его нам
// let sendFile = (filePath, res) => {
//   let stream = new fs.ReadStream(filePath);
//   let data;
//   stream.on('readable', () => {
//   data = stream.read();
//   res.end(data);
//   });
//     let mime = require('mime').lookup(filePath);
//     res.setHeader('Content-Type', mime + '; charset=utf-8');
// }


// let sendFile = (filePath, res) => {
//   fs.readFile(filePath, (err, content) => {
//     if(err) throw err;
//
//     let mime = require('mime').lookup(filePath);
//     res.setHeader('Content-Type', mime + '; charset=utf-8');
//     res.end(content);
//   });
// }
