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
  it('should be able to return the number of collaborators', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    assert.equal(ramble.numberOfCollaborators(), 1)
  });
  it('should have a deadline which is by default 1', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4});
    var rambleTwo = new Ramble({owner:"John Doe"});
    assert.equal(ramble.deadline, 4);
    assert.equal(rambleTwo.deadline, 1);
  });

  it('should be able to add collaborators',function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4,maxCollaborators:6});
    ramble.addCollaborator("Jane Doe");
    assert.equal(ramble.collaborators.length, 2);
    assert.equal(ramble.collaborators[1],"Jane Doe")
  });

  it('should not be able to add more collaborators than the maximum', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4,maxCollaborators:2});
    ramble.addCollaborator("Jane Doe");
    ramble.addCollaborator("John Smith");
    assert.equal(ramble.collaborators.length, 3);
  });

  it('Should have the name of the next person required to submit a path set to the first collaborator added to the ramble', function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4,maxCollaborators:4});
    ramble.addCollaborator("Jane Doe");
    ramble.firstSubmit()
    assert.equal(ramble.currentSubmit,"Jane Doe")
  });

  it('Should be able to assign the next submitter',function(){
    var ramble = new Ramble({owner:"John Doe",deadline:4,maxCollaborators:4});
    ramble.addCollaborator("Jane Doe");
    ramble.firstSubmit();
    assert.equal(ramble.currentSubmit,"Jane Doe");
    ramble.addCollaborator("Jon Smith");
    ramble.addSubmit();
    assert.equal(ramble.currentSubmit,"Jon Smith");
  })



})