const Numbers = require ('../dist/index.js')

let val = 1234
console.log("1234 ➜",Numbers.default.Humanify(val))
console.log("1234 ➜",Numbers.default.Humanify(val),{"format":"bytes"})