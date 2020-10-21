let fs = require('fs');

fs.readFile('readMe.txt', {encoding: 'utf-8'}, function(err, data) {
  fs.writeFile('writeMe.txt', data, function(err, data) { console.log('Write file seccess!');
  });
});
