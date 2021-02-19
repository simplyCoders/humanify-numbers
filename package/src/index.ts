// //////////////////////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale / short strings.
// Developed by simplyCoders, 2021.

const humanifyPercent = (value: number, precision: number) => {
  // convert number to string
  const percent = value * 100
  return `${percent.toFixed(precision)}%`
}

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
    const isPercentFormat = (optsByte === 'percent')

    const optsPrecision = (typeof opts.precision !== 'number' || !Number.isInteger(opts.precision)) ? 1 : opts.precision
    const precision = (optsPrecision < 0 || optsPrecision > 3) ? 1 : optsPrecision

    // end cases
    if (isByteFormat && value < 0) {
      return 'NaN'
    }

    if (isByteFormat && !Number.isInteger(value)) {
      return 'NaN'
    }

    // handle percent
    if (isPercentFormat) {
      return humanifyPercent(value, precision)
    }

    // analyze the number
    const avalue = Math.abs(value)
    let numberCategory = Math.floor(Math.log(avalue + 0.0001) / Math.log(10) / 3)
    numberCategory = (numberCategory < 0) ? 0 : numberCategory
    const suffix = isByteFormat ? byteSuffix[numberCategory] : numberSuffix[numberCategory]

    const digitsToRemove = numberCategory * 3 - precision
    const humanifiedNumber = (Math.floor(value / (10 ** digitsToRemove)) / (10 ** precision))
      .toFixed(precision)

    // convert number to string
    return humanifiedNumber + suffix
  }
}
