var Origin = function(params) {
  this.author = params.author;
  this.title = params.title;
  this.tags = [params.genre];
  this.content = params.content;
  this.minword = params.minword || 1;
  this.maxword = params.maxword;
};

Origin.prototype = {
  addTag:function(tag){
    this.tags.push(tag);
  },
  cleanUp:function(){
    var noSpecCharString = (this.content).replace(/[^\w\s]/gi, '');
    return noSpecCharString.replace(/\s\s+/g, ' ')
  },
  wordCount:function(){
    var string = this.cleanUp();
    return string.split(" ").length;
  },
  checkMinMax:function(){
    var count = this.wordCount();
    
  }


};

module.exports = Origin;