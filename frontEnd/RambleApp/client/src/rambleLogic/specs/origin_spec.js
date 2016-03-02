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
  it('should have a default tag of Misc if it is not defined in the params', function(){
    var origin = new Origin({author:"John Doe",title:"Story Title",genre:"",content:"This is the first bit of text",minword:50,maxword:60});
    assert.equal(origin.tags.length, 1);
    assert.equal(origin.tags[0],"Misc");
  });


});