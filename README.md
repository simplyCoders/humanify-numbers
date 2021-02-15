# humanify-numbers

Stringify numbers for humans, aka Humanify. 

E.g. 1234 ➜ 1.2K

**_Still early development - Not ready for main use_**

## Install 

~~~
npm install -s humanify-numbers
~~~

## Use in TypeScript

~~~typescript
import { Numbers } from 'humanify-numbers'

console.log('1234 ➜', Numbers.Humanify(1234))
console.log('1234 ➜', Numbers.Humanify(1234, { format: 'bytes' }), 'with bytes option')
~~~

## Use in JavaScript

~~~javascript
const Numbers = require ('humanify-numbers')

console.log("1234 ➜",Numbers.Humanify(1234))
console.log("1234 ➜",Numbers.Humanify(1234,{"format":"bytes"}), 'with bytes option')
~~~

## Examples

|Value|Number|Bytes|
|---|---|---|
|1234|1.2K|1.2KB|
|1234567|1.2M|1.2MB|
|1234567890|1.2B|1.2GB|
|1234567890123|1.2T|1.2TB|
|1234567890123456|1.2Q|1.2PB|
|0.12|12%|NaN|
|0.012|1.2%|NaN|
|0.0012|0.12%|NaN|
|abcd|NaN|NaN|

# Options

An optional parameter to manage how the numbers are humanified. 

|Option|Type|Description|
|---|---|---|
|format|string| "number" (default) or "bytes"|
|precision|number| Value between 0 and 3, default 1|
