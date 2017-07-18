let log = require('logger')(module);
let db = require('db');

db.connect();

let User = require('./user');

function run() {
  var vasya = new User('Вася');
  var petya = new User('Петя');

  vasya.hello(petya);

  log(db.getPhrase('Run seccessful'));
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}
