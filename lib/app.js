
var SuperUser = require('./SuperUser.js');

function classReflector(obj) {
  // console.log('calling ' + obj);
  console.log('Class: ' + obj.constructor.name);
  console.log(Object.keys(obj));
  if (Object.getPrototypeOf(obj) !== null)
    classReflector(Object.getPrototypeOf(obj));
}

var user = new SuperUser('Francis', 'Leader');
classReflector(SuperUser.prototype);
