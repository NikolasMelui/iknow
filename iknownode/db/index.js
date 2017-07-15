let phrases;
exports.connect = function () {
  phrases = require('./ru');
};

exports.getPhrase = function (name) {
  if(!phrases[name]){
    throw new Error('There ius NO SUCH PHRASE ' + name);
  }
  return phrases[name];
};
