import { Numbers } from 'humanify-numbers'

const val = 1234
console.log('1234 ➜', Numbers.Humanify(val))
console.log('1234 ➜', Numbers.Humanify(val, { format: 'bytes' }), 'with bytes option')
