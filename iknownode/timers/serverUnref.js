const http = require('http');
let server = new http.Server((req, res) => console.log('Server is listening' )).listen(3000);

setTimeout(() => server.close(), 2500);

let timer = setInterval(() => console.log(process.memoryUsage()), 1000);

timer.unref();
