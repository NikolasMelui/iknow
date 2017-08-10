const http = require('http');
const fs = require('fs');

let clients = [];

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendFile('client.html', res);
      break;
    case '/subscribe':
      subscribe(req, res);
      break;
    case '/publish':
      publish('...');
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
  }
}).listen(3000);

let sendFile = (fileName, res) => {
  let fileStream = fs.createReadStream(fileName);
  fileStream
    .on('error', () => {
      res.statusCode = 404;
      res.end('Not found');
    })
    .pipe(res)
    .on('close', () => {
      fileStream.destroy();
    });
}

let subscribe = (req, res) => {
  console.log('subscribe');
  clients.push(res);
}

let publish = (message) => {
  console.log('publish \'%s\'', message);
  clients.forEach((res) => {
    console.log(message);
    res.end(message);
    console.log(clients);
  });
clients = [];
}