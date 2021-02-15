// //////////////////////////////////////////////////////////////
// humanify-numbers
// Convert numbers to human readbale and short strings.
// Developed by simplyCoders, 2021.

export class Numbers {
  static Humanify(value: number, options?: any) {
    // validate value
    if (typeof value !== 'number') {
      return 'NaN'
    }

    // collect options
    const isByteFormat = !((typeof options === 'undefined' || typeof options.format !== 'string' || options.format.toLowerCase() !== 'bytes'))
    const precision = (typeof options === 'undefined' || typeof options.precision !== 'number' || options.precision > 3 || options.precision < 0) ? 1 : options.precision

    // analyze the number
    const sign = (value < 0) ? '-' : ''
    const avalue = Math.abs(value)
    const suffixIndex = Math.floor(Math.log(avalue) / Math.log(10) / 3)
    const numberSuffix = ['', 'k', 'm', 'b', 't', 'Q']
    const byteSuffix = ['0', 'kb', 'mb', 'gb', 'tb', 'pb']
    const suffix = isByteFormat ? byteSuffix[suffixIndex] : numberSuffix[suffixIndex]

    const digitsToRemove = Math.floor(Math.log(avalue) / Math.log(10)) - precision
    const digitsToKeep = Math.round(value / (10 ** digitsToRemove)) / (10 ** precision)

    // convert number to string
    return sign + (digitsToKeep).toString() + suffix
  }
}
