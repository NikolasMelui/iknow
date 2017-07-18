// var log = require('logger')(module);
var db = require('db');
var express = require('express');

db.connect();
var app = express();
app.get('/', function (req, res) {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(db.getPhrase('Hello'));
  res.end();
});
app.listen(3000);
// let User = require('./user');
//
// function run() {
//   var vasya = new User('Вася');
//   var petya = new User('Петя');

  // vasya.hello(petya);

  // log(db.getPhrase('Run seccessful'));
// }
//
// if(module.parent) {
//   exports.run = run;
// } else {
//   run();
// }
