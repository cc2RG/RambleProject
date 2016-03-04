var Ramble = function(params){
  this.owner = params.owner;
  this.collaborators = [params.owner];
  this.deadline = params.deadline || 1;
}

Ramble.prototype = {
  addCollaborator: function(user){
    this.collaborators.push(user);
  }
}

module.exports = Ramble;