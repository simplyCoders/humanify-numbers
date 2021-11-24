# humanify-numbers [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/humanify-numbers.svg?style=flat)](https://www.npmjs.com/package/humanify-numbers) [![Run example](https://img.shields.io/static/v1?label=repl.it&message=run%20example&color=blue)](https://repl.it/join/ahkbmpzw-ezborgy)

Stringify numbers for humans, aka **_Humanify_** the numbers. 

E.g. 1234 ➜ "1.2K"

## Install 

~~~
npm install -s humanify-numbers
~~~

## Use in TypeScript 

Simple TypeScript code:

~~~typescript
import { Numbers } from 'humanify-numbers'

console.log("1234567890 ➜", Numbers.stringify(1234567890))
// output: 1.2B

console.log("1234567890 ➜", Numbers.stringify(1234567890, 
                            { style: 'space' })) 
// output: 1.2GiB

console.log("1234567890 ➜", (1234567890).toLocaleString())
// compare with toLocalString(): 1,234,567,890
~~~

## Use in JavaScript

Same code in simple JavaScript:

~~~javascript
const { Numbers } = require("humanify-numbers");

console.log("1234 ➜", Numbers.stringify(1234)); 
// output: 1234 ➜ 1.2K
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

### Storage

Following the IEC 80000-13:2008 spec:

|Value|Humanify|
|---|---|
|1234|1.2KiB|
|1234567|1.2MiB|
|1234567890|1.2GiB|
|1234567890123|1.2TiB|
|1234567890123456|1.2PiB|
|1234567890123456789|1.2EiB|
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

### namedNumber

|Value|Humanify|
|---|---|
|1234|1.2 Thousands|
|1234567|1.2 Millions|

# Options

An optional parameter to manage how the numbers are humanified. 

|Option|Type|Description|
|---|---|---|
|style|string| "number" (default) or "space" or "percent" or "namedNumber"|
|precision|number| Value between 0 and 3, default 1|
|math|string| "floor" (default) or "round" or "ceil"|
|format (deprecated)|string| "number" (default) or "byte" or "percent"|

# Limits

* "precision": number between 0 and 3
* "number": Value < 1,000T (aka 10^15) and Value > -1,000T 
* "space": value must be a positive integer
* "space": Value < 1,000EiB (aka 1,024^7) and Value >= 0
* "percent": Value < 1,000K% (aka 10,000) and Value > -1,000K%
