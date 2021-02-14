# stringify-numbers
Stringify numbers for humans, aka Humanify. E.g. 1200 ➜ 1.2K, 0.012 ➜ 1.2%

**_Still early development - Not ready for main use_**

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

# Options

An optional parameter to manage how the numbers are humanified. 

|Option|Type|Description|
|---|---|---|
|format|string| Possible values: number (default) or bytes|
