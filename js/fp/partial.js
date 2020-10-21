'use strict';

const partial = (fn, x) => (...args) => fn(x, ...args);

const sum4 = (a, b, c, d) => (a + b + c + d);

const f1 = partial(sum4, 1);
const f2 = partial(f1, 2);
const f3 = partial(f2, 3);
const result = f3(4);

console.info(result);
