var Ramble = function(params){
  this.owner = params.owner;
  this.collaborators = [params.owner];
  this.deadline = params.deadline || 1;
}

Ramble.prototype = {

}

module.exports = Ramble;