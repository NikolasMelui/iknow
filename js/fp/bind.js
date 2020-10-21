'use strict';

const log = (base, n) => Math.log(n) / Math.log(base);

const lg = log.bind(null, 10);
const ln = log.bind(null, Math.E);

console.info(`lg(5) = ${lg(5)}`);
console.info(`ln(5) = ${ln(5)}`);
