'use strict';

const partialCurry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return partialCurry(f);
  } else {
    return fn(...args);
  }
}

const sum4 = (a, b, c, d) => (a + b + c + d);

const f = partialCurry(sum4);

const resultOne = sum4(1, 2, 3, 4);
const resultTwo = f(1, 2, 3, 4);
const resultThree = f(1)(2, 3, 4);
const resultFour = f(1, 2)(3, 4);
const resultFive = f(1, 2, 3)(4);
const resultSix = f(1)(2)(3)(4);

console.info(resultOne, resultTwo, resultThree, resultFour, resultFive, resultSix);
