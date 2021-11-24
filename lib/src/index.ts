// //////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale / short strings.
// Developed by simplyCoders, 2021.

// ----------------------------------------------
// Supported styless.
const stylesAvailable = ['number', 'space', 'percent', 'byte', 'storage', 'namedNumber']
interface IStyles {
  [key: string]: any
}
const styles: IStyles = {
  number: {
    suffix: ['', 'K', 'M', 'B', 'T', 'Q'],
    min: 10 ** (-3),
    max: 10 ** 15,
  },
  namedNumber: {
    suffix: ['', ' Thousand', ' Million', ' Billion', ' Trillion', ' Quadrillion'],
    min: 10 ** (-3),
    max: 10 ** 15,
  },
  space: {
    suffix: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB'],
    min: 10 ** (0),
    max: 10 ** 21,
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
  static stringify(value: number, options?: any) {
    // defaults
    const defaultOpts = { style: 'number', precision: 1, math: 'floor' }

    // validate value
    if (typeof value !== 'number') {
      return 'NaN'
    }

    // analyze options
    const opts = defaultOpts
    if ((typeof options !== 'undefined')
      && (typeof options.style === 'string')
      && (stylesAvailable.includes(options.style))) {
      opts.style = options.style
    }

    if ((typeof options !== 'undefined') // for backward compatability
      && (typeof options.format === 'string')
      && (stylesAvailable.includes(options.format))) {
      opts.style = options.format
    }

    if (opts.style === 'byte') { // for backward compatability
      opts.style = 'space'
    }

    if (opts.style === 'storage') { // for backward compatability
      opts.style = 'space'
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

    const val = (opts.style === 'percent') ? (value * 100) : value

    // end cases
    if (val === 0) {
      const zSuffix = styles[opts.style].suffix[0]
      const zeroVal = (0).toString()
      return zeroVal + zSuffix
    }

    const absVal = Math.abs(val)
    if ((absVal < styles[opts.style].min) || (absVal > styles[opts.style].max)) {
      return 'NaN'
    }

    if (opts.style === 'space' && (!Number.isInteger(val) || val < 0)) {
      return 'NaN'
    }

    // process the value
    const denominator = (opts.style === 'space') ? 1024 : 1000
    let logOfVal = Math.floor(Math.log(absVal + 0.00001) / Math.log(denominator))
    logOfVal = (logOfVal < 0) ? 0 : logOfVal // optimize

    let normalizedVal = val / (denominator ** logOfVal)
    if (Math.floor(normalizedVal)===0 && logOfVal > 0) { // optimize
      logOfVal -= 1
      normalizedVal = val / (denominator ** logOfVal)
    }

    const precisionedVal = maths[opts.math](normalizedVal * (10 ** opts.precision)) 
                         / (10 ** opts.precision)

    const humanifiedNumber = (precisionedVal).toString()

    const suffix = styles[opts.style].suffix[logOfVal]
    const plural = (opts.style==='namedNumber' && precisionedVal!==1 && suffix!=='') ? 's' : ''
    
    
    // build the final string
    return humanifiedNumber + suffix + plural
  }
}
