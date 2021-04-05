# humanify-numbers [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/humanify-numbers.svg?style=flat)](https://www.npmjs.com/package/humanify-numbers) [![Run example](https://img.shields.io/static/v1?label=repl.it&message=run%20example&color=blue)](https://repl.it/join/ahkbmpzw-ezborgy)

Stringify numbers for humans, aka **_Humanify_** the numbers. 

E.g. 1234 ➜ "1.2K"

## Install 

~~~
npm install -s humanify-numbers
~~~

## TypeScript Usage

Simple TypeScript code:

~~~typescript
import { Numbers } from 'humanify-numbers'

console.log("1234567890 ➜", (1234567890).toLocaleString())
// the built-in toLocalString() output: 1,234,567,890
console.log("1234567890 ➜",Numbers.stringify(1234567890)); 
// output: 1.2B
console.log("1234567890 ➜",Numbers.stringify(1234567890, { format: 'byte' })) 
// output: 1.2GB
~~~

## JavaScript Usage

Same code in simple JavaScript:

~~~javascript
const { Numbers } = require("humanify-numbers");

console.log("1234 ➜",Numbers.stringify(1234)); 
// output: 1234 ➜ 1.2K
~~~

[Read more](https://github.com/simplyCoders/humanify-numbers).
