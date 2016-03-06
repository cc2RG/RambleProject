var Path = require('../path.js');
var assert = require('assert');

describe("path",function(){
  it('should have an author and content',function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    assert.equal(path.author, "John Doe");
    assert.equal(path.content, "This is the submitted text");
  })  
  it('should start out with a word count of zero', function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    assert.equal(path.wordCount, 0);
  })
  it('should start out with no votes', function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    assert.equal(path.votes, 0);
  })
  it('should be able to assign a word count', function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    path.wCount();
    assert.equal(path.wordCount, 5);
  })
  it('should be able to check if the wordCount is valid',function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    path.wCount();
    assert.equal(path.checkWCount(1,8), true);
    assert.equal(path.checkWCount(10,20), false);
  })
  it('should be able to add votes', function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    path.addVote();
    assert.equal(path.votes, 1);
  })
  it('should be able to check if the number of votes is valid', function(){
    var path = new Path({author:"John Doe",content:"This is the submitted text"})
    path.addVote();
    assert.equal(path.checkVotes(1), true);
    assert.equal(path.checkVotes(6), false);
  })
});