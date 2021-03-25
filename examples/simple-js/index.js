const { Numbers } = require("humanify-numbers");

console.log("1234 ➜",Numbers.stringify(1234));
console.log("1234 ➜",Numbers.stringify(1234, { format: 'byte' }), '(byte option)');
console.log("1234 ➜",Numbers.stringify(1234, { precision: 3 }), '(precision 3 option)');
