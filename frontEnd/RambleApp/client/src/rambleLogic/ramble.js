var Ramble = function(params){
  this.owner = params.owner;
  this.collaborators = [params.owner];
  this.maxCollaborators = params.maxCollaborators + 1 || 1;
  this.deadline = params.deadline || 1;
  this.currentSubmit = this.collaborators[(this.numOfSubmits) + 1] || "None";
  this.numOfSubmits = 0;
}

Ramble.prototype = {
  numberOfCollaborators:function(){
    return this.collaborators.length;
  },
  addCollaborator: function(user){
    if(this.collaborators.length < this.maxCollaborators){
    this.collaborators.push(user);
    }
  },
  firstSubmit:function(){
    if(this.numOfSubmits == 0){
      this.currentSubmit = this.collaborators[1]
    }
    
  },
  addSubmit: function(){
    this.numOfSubmits = this.numOfSubmits + 1;
    this.nextSubmit();
  },

  nextSubmit: function(){
    var currentSubmitIndex = this.numOfSubmits + 1
    if(currentSubmitIndex > this.collaborators.length){
      this.currentSubmit = this.collaborators[0];
    } else {
    this.currentSubmit = this.collaborators[currentSubmitIndex] 
    }
  }
}

module.exports = Ramble;