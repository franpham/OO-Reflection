
var SuperUser = require('./SuperUser.js');

// IMPORTANT: if the object is an instance, call Object.getPrototypeOf(obj) to get the prototype;
// NOTE: dot notation for prototype references the [[prototype]] object correctly ONLY IF Class.prototype is invoked, NOT instance.prototype;

function reflector(obj) {     // obj should be the prototype object on recursive calls;
  console.log('Class: ' + obj.constructor.name);

  // DO NOT print out the properties unless the prototype is given;
  if (!(obj instanceof obj.constructor)) {

    // print the prototype's properties
    console.log('prototype properties: ' + Object.keys(obj));

    // MUST create an INSTANCE via (new prototype.constructor()) to get the instance properties
    console.log('instance properties: ');
    var theseKeys = Object.keys(new obj.constructor());    // keys() of instance returns properties of BOTH current && superclass
    if (Object.getPrototypeOf(obj)) {     // MUST check if the current prototype has an inherited prototype

      // MUST create an INSTANCE of the super prototype to compare with the current prototype's instance;
      var superKeys= Object.keys(new (Object.getPrototypeOf(obj).constructor)());
      var keys = [];       // if a key is not in superclass' properties, then it's defined in current class;

      for (var i = 0; i < theseKeys.length; i++) {
        if (!superKeys.some(function(val) { return theseKeys[i] === val; }))
          keys.push(theseKeys[i]);         // if true, then key was defined in the current class;
      }
      theseKeys = keys;
    }
    console.log(theseKeys);
  }
  if (Object.getPrototypeOf(obj) !== null)    // if prototype is not null (aka: obj is not Object), recursively call reflector;
    reflector(Object.getPrototypeOf(obj));
}

console.log('Reflecting Class.prototype');
reflector(SuperUser.prototype);
console.log('Reflecting new instance of Class');
reflector(new SuperUser('Francis', 'Admin'));
