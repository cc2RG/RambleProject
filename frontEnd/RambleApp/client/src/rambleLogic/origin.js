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
  }



};

module.exports = Origin;