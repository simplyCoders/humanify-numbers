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


console.log('1234 ➜', Numbers.Humanify(1234)) // output: 1234 ➜ 1.2K

console.log('1234 ➜', Numbers.Humanify(1234, 
                         { format: 'byte' })) // output: 1234 ➜ 1.2KB (byte)

console.log('1234 ➜', Numbers.Humanify(1234, 
                           { precision: 3 })) // output: 1234 ➜ 1.234K (precision 3)
            
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

### Number

|Value|Humanify|
|---|---|
|1234|1.2K|
|1234567|1.2M|
|1234567890|1.2B|
|1234567890123|1.2T|
|-1234|-1.2K|
|1.234|1.2|
|0.1234|0.1|
|abcd|NaN|

### Byte

|Value|Humanify|
|---|---|
|1234|1.2KB|
|1234567|1.2MB|
|1234567890|1.2GB|
|1234567890123|1.2TB|
|1234567890123456|1.2PB|
|1.234|NaN|
|-1234|NaN|
|abcd|NaN|

### Percent

|Value|Humanify|
|---|---|
|0.01234|1.2%|
|0.001234|0.1%|
|0.1234|12.3%|
|1.234|123.4%|
|12.34|1234.0K%|

# Options

An optional parameter to manage how the numbers are humanified. 

|Option|Type|Description|
|---|---|---|
|format|string| "number" (default) or "byte" or "percent"|
|precision|number| Value between 0 and 3, default 1|
|math|string| "floor" (default) or "round" or "ceil"|

# Limits

* Precision can be a number between 0 and 3.
* Value for "number" must be less than 1,000T (or 10 to the power of 15). 
* Value for "number" must be greater than -1,000T (or minus 10 to the power of 15). 
* Value for "byte" must be a positive integer.
* Value for "byte" must be less than 1,000PB (or 10 to the power of 18). 
* Value for "percent" must be less than 1,000K%. 
* Value for "percent" must be greater than -1,000%. 
