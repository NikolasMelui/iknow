'use strict';

const log = (base, n) => Math.log(n) / Math.log(base);

const lg = n => log(10, n);
const ln = n => log(Math.E, n);

console.info(`lg(5) = ${lg(5)}`);
console.info(`ln(5) = ${ln(5)}`);
