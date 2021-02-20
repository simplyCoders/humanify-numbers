// //////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale / short strings.
// Developed by simplyCoders, 2021.

// ----------------------------------------------
// Supported formats.
const formatsAvailable = ['number', 'byte', 'percent']
interface IFormats {
    [key: string]: any
}
const formats: IFormats = {
  number: {
    suffix: ['', 'K', 'M', 'B', 'T'],
    min: 10 ** (-3),
    max: 10 ** 15,
  },
  byte: {
    suffix: ['B', 'KB', 'MB', 'GB', 'TB', 'PB'],
    min: 10 ** (0),
    max: 10 ** 18,
  },
  percent: {
    suffix: ['%', 'K%'],
    min: 10 ** (-3),
    max: 10 ** 6,
  },
}

// ----------------------------------------------
// Supported math functions.
const mathsAvailable = ['floor', 'round', 'ceil']
interface IMaths {
    [key: string]: any
}
const maths: IMaths = {
  floor: Math.floor,
  round: Math.round,
  ceil: Math.ceil,
}

// ----------------------------------------------
// The exposrt: Numbers class
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

    const val = (opts.format === 'percent') ? (value * 100) : value

    // end cases
    if (val === 0) {
      const zSuffix = formats[opts.format].suffix[0]
      const zeroVal = (0).toFixed(opts.precision)
      return zeroVal + zSuffix
    }

    const absVal = Math.abs(val)
    if ((absVal < formats[opts.format].min) || (absVal > formats[opts.format].max)) {
      return 'NaN'
    }

    if (opts.format === 'byte' && (!Number.isInteger(val) || val < 0)) {
      return 'NaN'
    }

    // process the value
    let numberIndex = Math.floor(Math.log(absVal + 0.00001) / Math.log(10) / 3)
    numberIndex = (numberIndex < 0) ? 0 : numberIndex
    const suffix = formats[opts.format].suffix[numberIndex]

    const numDigitsToRemove = numberIndex * (-3) + opts.precision
    const digitsToKeep = val * (10 ** numDigitsToRemove)
    const applyMath = maths[opts.math](digitsToKeep)
    const applyPrecision = applyMath / (10 ** opts.precision)
    const humanifiedNumber = (applyPrecision).toFixed(opts.precision)

    // build the final string
    return humanifiedNumber + suffix
  }
}
