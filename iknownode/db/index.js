var util = require('util');
var phrases;

exports.connect = function () {
  phrases = require('./ru');
};

function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);

exports.getPhrase = function (name) {
  if(!phrases[name]){
    throw new PhraseError('There is NO SUCH PHRASE ' + name);
  }
  return phrases[name];
};
