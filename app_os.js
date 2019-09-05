const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// regular concatination:
// console.log("Total memory is " + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6:

console.log(`Total memory is: ${totalMemory}`);
console.log(`Free memory is: ${freeMemory}`);