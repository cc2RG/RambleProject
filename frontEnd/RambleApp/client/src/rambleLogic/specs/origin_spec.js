var Origin = require('../origin.js');
var assert = require('assert');

describe('origin',function(){
  it('should have an author, title, tag, content, minword, maxword',function(){
    var origin = new Origin({author:"John Doe",title:"Story Title",genre:"Misc",content:"This is the first bit of text",minword:50,maxword:60});
    assert.equal(origin.author,"John Doe");
    assert.equal(origin.title,"Story Title");
    assert.equal(origin.tags[0],"Misc");
    assert.equal(origin.content,"This is the first bit of text");
    assert.equal(origin.minword,50);
    assert.equal(origin.maxword,60);
  });
  
  it('should be able to have genre tags added to it',function(){
    var origin = new Origin({genre:"Horror"});
    origin.addTag("Science Fiction");
    assert.deepEqual(origin.tags,["Horror","Science Fiction"]);
  });

  it('should be able to return a word count of the content', function(){
    var origin = new Origin({author:"John Doe",title:"Story Title",genre:"Misc",content:"There are seven words in this string",minword:1,maxword:10});
    assert.equal(origin.wordCount(),7);
  });  

});