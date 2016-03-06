var Ramble = require('./ramble.js');

var firstRamble = new Ramble({owner:"John Smith",maxCollaborators:2});

console.log(firstRamble)

firstRamble.addCollaborator("Jane Doe");

console.log(firstRamble);

firstRamble.addCollaborator("Rose Plant");
console.log(firstRamble);