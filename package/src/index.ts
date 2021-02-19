// //////////////////////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale / short strings.
// Developed by simplyCoders, 2021.

import { formatsAvailable, formats } from './formats'
import { mathsAvailable, maths } from './maths'

export class Numbers {
  static Humanify(value: number, options?: any) {

    // defaults
    const defaultOpts = { format: 'number', precision: 1, math: 'floor' }

    // validate value
    if (typeof value !== 'number') {
      return 'NaN'
    }

    // analyze options
    const opts = defaultOpts
    if ((typeof options !== 'undefined')
      && (typeof options.format === 'string')
      && (formatsAvailable.includes(options.format))) {
      opts.format = options.format
    }

    if ((typeof options !== 'undefined')
      && (typeof options.precision === 'number')
      && (options.precision >= 0)
      && (options.precision <= 3)) {
      opts.precision = options.precision
    }

    if ((typeof options !== 'undefined')
      && (typeof options.math === 'string')
      && (mathsAvailable.includes(options.math))) {
      opts.math = options.math
    }

    if (opts.format==='percent') {
      value = value * 100
    }

    // end cases
    if (value === 0) {
      const zSuffix = formats[opts.format].suffix[0]
      const zValue = (0).toFixed(opts.precision)
      return zValue + zSuffix
    }

    const absValue = Math.abs(value)
    if ((absValue < formats[opts.format].min) || (absValue > formats[opts.format].max)) {
      return 'NaN'
    }

    if (opts.format === 'byte' && (!Number.isInteger(value) || value < 0)) {
      return 'NaN'
    }

    // process the value
    let numberIndex = Math.floor(Math.log(absValue+0.00001) / Math.log(10) / 3)
    numberIndex = (numberIndex < 0) ? 0 : numberIndex
    const suffix = formats[opts.format].suffix[numberIndex]

    const numDigitsToRemove = numberIndex * (-3) + opts.precision
    const digitsToKeep = value * (10 ** numDigitsToRemove)
    const applyMath = maths[opts.math](digitsToKeep)
    const applyPrecision = applyMath / (10 ** opts.precision)
    const humanifiedNumber = (applyPrecision).toFixed(opts.precision)

    // build the final string
    return humanifiedNumber + suffix
  }
}
