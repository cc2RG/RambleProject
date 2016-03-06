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

  it('should be able to add collaborators',function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    ramble.addCollaborator("Jane Doe");
    assert.equal(ramble.collaborators.length, 2);
    assert.equal(ramble.collaborators[1],"Jane Doe")
  });

  it('Should have the name of the next person required to submit a path set to the first collaborator added to the ramble', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    ramble.addCollaborator("Jane Doe");
    ramble.firstSubmit()
    assert.equal(ramble.currentSubmit,"Jane Doe")
  });

  it('Should be able to assign the next submitter',function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    ramble.addCollaborator("Jane Doe");
    ramble.firstSubmit();
    assert.equal(ramble.currentSubmit,"Jane Doe")
    ramble.addSubmit();
    ramble.addCollaborator("John Smith")
    ramble.nextSubmit();
    assert.equal(ramble.currentSubmit,"John Smith")
    ramble.nextSubmit();
  })



})