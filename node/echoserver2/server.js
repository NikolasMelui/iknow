const http = require('http');
const url = require('url');

let server = new http.Server((req, res) => {
console.log(req.method, req.url);
let urlParsed = url.parse(req.url, true);
console.log(urlParsed);
(urlParsed.pathname == '/login') ? res.end('Login here!') : res.statusCode = 400;
});
server.listen(3000);