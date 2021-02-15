import { Numbers } from 'humanify-numbers'

const print = (val:number) => {
  console.log(val,' ➜', Numbers.Humanify(val))
  console.log(val,' ➜', Numbers.Humanify(val, { format: 'bytes' }), 'with bytes option')
}

print (1)
print (12)
print (123)
print (1234)
print (12345)
print (123456)
print (1234567)
print (12345678)
print (123456789)
print (1234567890)
print (-1234)
