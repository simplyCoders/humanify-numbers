import { Numbers } from 'humanify-numbers'

const print = (val:number) => {
  console.log(val,' ➜', Numbers.Humanify(val))
  console.log(val,' ➜', Numbers.Humanify(val, { format: 'bytes' }), '(bytes option).')
}

const printPrecision = (val:number, precision:number) => {
  console.log(val,' ➜', Numbers.Humanify(val, { precision: precision }), '(precision',precision,'option).')
  console.log(val,' ➜', Numbers.Humanify(val, { format: 'bytes', precision: precision }), '(precision',precision,'& bytes options).')
}

print (0)
print (1)
print (-1)
print (12)
print (123)
print (1234)
print (12345)
print (123456)
print (1234567)
print (12345678)
print (123456789)
printPrecision (1234567890,0)
printPrecision (12345678901,1)
printPrecision (123456789012,2)
printPrecision (1234567890123,3)
