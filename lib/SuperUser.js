
var GroupUser = require('./GroupUser.js');

function SuperUser(name, role) {
  GroupUser.call(this, name, role, name, 'Manager');

  this.manage = function() {
    console.log("I'm gonna manage you!");
  };
}

SuperUser.prototype = Object.create(GroupUser.prototype);
SuperUser.prototype.constructor = SuperUser;

SuperUser.prototype.isLeader = function() {
  return true;
};

module.exports = SuperUser;