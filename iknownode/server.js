// const http = require('http');
let User = require('./user');
let db = require('./db');
db.connect();

function run() {
  var vasya = new User('Вася');
  var petya = new User('Петя');

  vasya.hello(petya);
  console.log(db,getPhrase('Run seccessful'));
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}



// const hostname = 'localhost';
// const port = '3000';
// function run () {
//   const server = http.createServer((req, res) => {
//     res.statusCode = '200';
//     res.setHeader('Content-Type', 'texft/plain');
//     res.end('Server is running!');
//   });
//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
// }
// if(module.parent) {
//   exports.run = run;
// } else { run(); }
// exports.run = run;
