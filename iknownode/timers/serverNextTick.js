const fs = require('fs');

fs.open(__filename, 'r', (err, file) => console.log('IO'));
// setImmediate планируется на выполнение после следующей итерации
setImmediate(() => console.log('immediate'));
// nextTick всегда выполняется на следуюзей итерации
process.nextTick(() => console.log('nextTick'));
