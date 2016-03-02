var Ramble = require('../ramble.js');
var assert = require('assert');

describe('ramble',function(){
  it('should be able to assign an owner', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    assert.equal(ramble.owner,"John Doe"); 
  });

  it('should have a collaborators array, with the owner name included', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    assert.equal(ramble.collaborators[0],"John Doe");
  });

  it('should have a deadline which is by default 1', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    var rambleTwo = new Ramble({owner:"John Doe"});
    assert.equal(ramble.deadline, 4);
    assert.equal(rambleTwo.deadline, 1);
  });

})