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
  wordCount:function(){
    var string = this.cleanUp();
    return string.split(" ").length;
  checkValid:function(){}  

};

module.exports = Path;