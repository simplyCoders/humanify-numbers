const { Numbers } = require("humanify-numbers");

require ("humanify-numbers");

console.log("1234 ➜",Numbers.Humanify(1234));
console.log("1234 ➜",Numbers.Humanify(1234, { format: 'bytes' }), '(bytes option)');
console.log("1234 ➜",Numbers.Humanify(1234, { precision: 3 }), '(precision 3 option)');
