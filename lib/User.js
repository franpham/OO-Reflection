
function User(name, role) {
  this.name = name;
  var title = role;

  this.getTitle = function() {
    return title;
  };
  this.setTitle = function(role) {
    title = role;
  };
}

User.prototype.getName = function() {
  return this.name;
};

User.prototype.setName = function(name) {
  this.name = name;
};

User.prototype.isLeader = function() {
  return false;
};

module.exports = User;