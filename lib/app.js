var SuperUser = require('./SuperUser.js');
// IMPORTANT: if the object is an instance, call Object.getPrototypeOf(obj) to get the prototype, NOT instance.prototype;
// NOTE: dot notation references the [[prototype]] correctly ONLY IF Class.prototype is invoked, NOT instance.prototype;

function reflector(obj) {
  if (obj instanceof obj.constructor) {   // if obj is an instance, call reflector with its prototype without printing;
    reflector(Object.getPrototypeOf(obj));
  } else {
    var theseKeys;
    if (Object.getPrototypeOf(obj) !== null) {
      var superKeys = reflector(Object.getPrototypeOf(obj));
      // if prototype is not null (aka: obj is not Object), recursively call reflector;
      // UNROLL: use return values of later recursions to compare Subclass' properties with the Superclass' properties;
      var diffKeys = Object.keys(new obj.constructor());
      diffKeys = diffKeys.filter(function(val) { return !superKeys.some(function(sup) { return sup === val; });
      });
      console.log('Class: ' + obj.constructor.name);
      console.log('instance properties: ' + diffKeys);
      theseKeys = Object.keys(obj);
    } else {      // if prototype is null, then the base object is Object;
      console.log('Class: ' + obj.constructor.name);
      theseKeys = Object.getOwnPropertyNames(Object.prototype);
    }
    console.log('prototype properties: ' + theseKeys);
    return Object.keys(new obj.constructor());
  }
}

console.log('Reflecting Class.prototype');
reflector(SuperUser.prototype);
console.log('');
console.log('Reflecting new instance of Class');
reflector(new SuperUser('Francis', 'Admin'));
