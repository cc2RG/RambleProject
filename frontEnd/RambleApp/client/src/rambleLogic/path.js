var Path = function(params){
  this.author = params.author;  
  this.content = params.content;
  this.wordCount = 0;
  this.votes = 0;
};

Path.prototype = {
  
  cleanUp:function(){
    var noSpecCharString = (this.content).replace(/[^\w\s]/gi, '');
    return noSpecCharString.replace(/\s\s+/g, ' ')
  },
  wCount:function(){
    var string = this.cleanUp();
    this.wordCount = string.split(" ").length;
  },
  checkWCount:function(checkNumOne,checkNumTwo){
    if(this.wordCount >= checkNumOne && this.wordCount <= checkNumTwo){
      return true;
    }else{
      return false;
    }
  },
  addVote:function(){
    this.votes = this.votes + 1;
  },
  checkVotes: function(checkNum){
    if(this.votes >= checkNum){
      return true;
    } 
  }  

};

module.exports = Path;