/*
Переопределяем модуль винстона и дорабатываем его через систему транспортов
*/

var winston = require('winston');

module.exports = function (module) {
  return makeLogger(module.filename);
};

function makeLogger(path) {
// Смотрим на что заканчивается путь и возвращаем настроенный винстон
  if(path.match(/requestWinston.js$/)) {

    var transports = [

      new winston.transports.Console({
        timestamp: true,
        colorize: true,
        level: 'info'
      }),

      new winston.transports.File({ filename: 'debug.log', level: 'debug' })
    ];

    return new winston.Logger({ transports: transports });

  } else {

    return new winston.Logger({
      transports: []
    });

  }
}
