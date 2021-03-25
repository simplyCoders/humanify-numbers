import { Numbers } from 'humanify-numbers'

console.log('1234 ➜', Numbers.stringify(1234)) // output: 1234 ➜ 1.2K

console.log('1234 ➜', Numbers.stringify(1234, 
                         { format: 'byte' })) // output: 1234 ➜ 1.2KB (byte)

console.log('1234 ➜', Numbers.stringify(1234, 
                           { precision: 3 })) // output: 1234 ➜ 1.234K (precision 3)
