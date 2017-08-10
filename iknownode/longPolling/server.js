const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendFile('client.html', res);
      break;
    case '/subscribe':
      subscribe(req, res);
      break;
    case '/publish':
      let body = '';

      req.on('readable', () => {
          let bodyTmp = req.read();
          (bodyTmp!==null) ? body += bodyTmp : bodyTmp;
          if (body.length > 1e4) {
            res.statusCode = 413;
            res.end('Msg is 2 long');
          }
        });
        req.on('end', () => {
          body = JSON.parse(body);
          publish(body.message);
          res.end('ok');
        });
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

let clients = [];

let subscribe = (req, res) => {
  console.log('subscribe');
  clients.push(res);
  res.on('close', () => {
    clients.splice(clients.indexOf(res), 1);
  });
}

let publish = (message) => {
  console.log(`Publish ${message}`);
  clients.forEach((res) => {
    res.end(message);
  });
  // clients = [];
}
