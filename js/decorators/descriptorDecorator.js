'use strict';

const badLib = {
  hello: 'there'
};
const bad = Object.getOwnPropertyDescriptor(badLib, 'hello');
delete badLib.hello;
console.log(badLib.hello);
badLib.hello = 'JOPA!!!';
console.log(badLib.hello);
console.log(Object.keys(badLib));

const goodLib = {};
Object.defineProperty(goodLib, 'hello', {
  value: 'there'
})

const good = Object.getOwnPropertyDescriptor(goodLib, 'hello');
// delete goodLib.hello;
console.log(goodLib.hello);
// goodLib.hello = 'JOPA!!!';
console.log(goodLib.hello);
console.log(Object.keys(goodLib))
