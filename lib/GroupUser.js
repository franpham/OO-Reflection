
var User = require('./User.js');

function GroupUser(name, role, leader, purpose) {
  User.call(this, name, role);
  this.leader = leader;
  var type = purpose;

  this.getType = function() {
    return type;
  };
  this.setType = function(purpose) {
    type = purpose;
  };
}

GroupUser.prototype = Object.create(User.prototype);
GroupUser.prototype.constructor = GroupUser;

GroupUser.prototype.getLead = function() {
  return this.leader;
};

GroupUser.prototype.setLead = function(leader) {
  this.leader = leader;
};

module.exports = GroupUser;