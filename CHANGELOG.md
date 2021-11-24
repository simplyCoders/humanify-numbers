# Changelog

## 1.1.6 (Nov-23-2021)
* Complete transition to XiB.
* Add option for named numbers, such that 1234 ➜ 1.2 Thousands

## 1.1.5 (May-15-2021)
* Change "storage" to "space",
* Change space strings from XB to XiB. E.g. 1234 used to be 1.2KB and will now be 1.2KiB (according to IEC 80000-13:2008).
* Add bigger space numbers up to 999EiB (< 10^21).

## 1.1.4 (April-24-2021)
* Change "format" to "style"
* Chance "byte" to "storage"
* For backward compatability, continue to support older terms. 

## 1.1.0 (March-24-2021)
* This is a breaking change!
* Suppress zeros after the decimal point if the number is already an integer.
* Change interface from Humanify to stringify.

## 1.0.1 (March-17-2021)
* Chnage folder structure. ./lib now contains the package code.

## 1.0.0 (March-6-2021)
* After more testing. Officially announce the release of 1.0.0.

## 0.0.19 (Feb-20-2021)
* shrink the dist folder by merging back all ts files. 

## 0.0.17 (Feb-19-2021)
* Add support math: floor, round, ceil. 
* Refactoring for better unification of percent and others.
* Add documentation of limites in the readme. 

## 0.0.16 (Feb-18-2021)
* Add support for percent format.
* Fix bugs when precision is not zero but there are no digits after the decimal point. 
* Fix bug with 1000.

## 0.0.13 (Feb-16-2021)
* Add replt.it badge.

## 0.0.12 (Feb-15-2021)
* Add tests to build.

## 0.0.10 (Feb-15-2021)
* Add testing framework. 
* Fix bug with 123.456 ➜ 123.5
* Change options format:"bytes" to "byte".
* Non integers in "byte" format should return "NaN".

## 0.0.9 (Feb-15-2021)
* Fixing bunch of small issues, especially when running Node JavaScript examples. 

## 0.0.3 (Feb-14-2021)
* First published version.