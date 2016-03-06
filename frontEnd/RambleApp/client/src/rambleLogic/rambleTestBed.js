var Ramble = require('./ramble.js');

var firstRamble = new Ramble({owner:"John Smith"});

console.log(firstRamble)

firstRamble.addCollaborator("Jane Doe");

console.log(firstRamble);

firstRamble.firstSubmit();

console.log(firstRamble);

firstRamble.addSubmit();

console.log(firstRamble);

firstRamble.addCollaborator("Jimmy Jones");

console.log(firstRamble);

firstRamble.nextSubmit();

console.log(firstRamble);

firstRamble.addSubmit();

firstRamble.nextSubmit();

console.log(firstRamble);