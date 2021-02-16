// //////////////////////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale and short strings.
// Developed by simplyCoders, 2021.

export class Numbers {
  static Humanify(value: number, options?: any) {
    const numberSuffix = ['', 'K', 'M', 'B', 'T', 'Q']
    const byteSuffix = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    // validate value
    if (typeof value !== 'number') {
      return 'NaN'
    }

    // collect options
    const opts = (typeof options === 'undefined') ? {} : options

    const optsByte = (typeof opts.format !== 'string') ? 'number' : opts.format.toLowerCase()
    const isByteFormat = (optsByte === 'byte')

    const optsPrecision = (typeof opts.precision !== 'number' || !Number.isInteger(opts.precision)) ? 1 : opts.precision
    const precision = (optsPrecision < 0 || optsPrecision > 3) ? 1 : optsPrecision

    // end cases
    if (isByteFormat && value < 0) {
      return 'NaN'
    }

    if (isByteFormat && !Number.isInteger(value)) {
      return 'NaN'
    }

    if (value === 0) {
      const zSuffix = (isByteFormat) ? byteSuffix[0] : ''
      return `0${zSuffix}`
    }

    // analyze the number
    const avalue = Math.abs(value)
    const numberType = Math.floor(Math.log(avalue) / Math.log(10) / 3)
    const suffix = isByteFormat ? byteSuffix[numberType] : numberSuffix[numberType]

    const digitsToRemove = numberType * 3 - precision
    const digitsToKeep = Math.floor(value / (10 ** digitsToRemove)) / (10 ** precision)

    // convert number to string
    return (digitsToKeep).toString() + suffix
  }
}
