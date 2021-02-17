[![Run on Repl.it](https://repl.it/badge/github/simplyCoders/humanify-numbers)](https://repl.it/github/simplyCoders/humanify-numbers)

# humanify-numbers

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


console.log('1234 ➜', Numbers.Humanify(1234)) // output: 1234 ➜ 1.2K

console.log('1234 ➜', Numbers.Humanify(1234, 
            { format: 'byte' }), '(byte)') // output: 1234 ➜ 1.2KB (byte)

console.log('1234 ➜', Numbers.Humanify(1234, 
            { precision: 3 }), '(precision 3)') // output: 1234 ➜ 1.234K (precision 3)
            
~~~

The output:

![simple example](https://raw.githubusercontent.com/simplyCoders/humanify-numbers/main/sample.png)

## JavaScript Usage

Same code in simple JavaScript:

~~~javascript
const { Numbers } = require("humanify-numbers");

console.log("1234 ➜",Numbers.Humanify(1234)); // output: 1234 ➜ 1.2K

~~~

## Examples

|Value|Number|Byte|
|---|---|---|
|1234|1.2K|1.2KB|
|1234567|1.2M|1.2MB|
|1234567890|1.2B|1.2GB|
|1234567890123|1.2T|1.2TB|
|1234567890123456|1.2Q|1.2PB|
|0.12 (future)|12%|NaN|
|0.012 (future)|1.2%|NaN|
|0.0012 (future)|0.12%|NaN|
|abcd|NaN|NaN|

# Options

An optional parameter to manage how the numbers are humanified. 

|Option|Type|Description|
|---|---|---|
|format|string| "number" (default) or "byte"|
|precision|number| Value between 0 and 3, default 1|
