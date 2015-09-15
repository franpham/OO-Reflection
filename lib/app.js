
var SuperUser = require('./SuperUser.js');

function reflector(obj) {
  // console.log('calling ' + obj);
  console.log('Class: ' + obj.constructor.name);
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'function')
        console.log('function: ' + key);
      else
        console.log('property: ' + key);
    }
  }
  /*
  var keys = Object.keys(Object.getPrototypeOf(obj));
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'function')
      console.log('function: ' + keys[i]);
    else
      console.log('property: ' + keys[i]);
  }
  */
  console.log('prototype: ' + obj.prototype);
  if (obj.prototype) {
    reflector(obj.prototype);
  }
}

var user = new SuperUser('Francis', 'Leader');
reflector(Object.getPrototypeOf(user));