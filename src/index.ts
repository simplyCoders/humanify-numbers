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
    const isByteFormat = !!((typeof options !== 'undefined' && typeof options.format === 'string' && options.format.toLowerCase() === 'bytes'))
    
    // convert number to string
    const numberSuffix = ['', 'k', 'm', 'b', 't', 'Q']
    const byteSuffix = ['0', 'kb', 'mb', 'gb', 'tb', 'pb']

    const suffixIndex = Math.floor(Math.log(value) / Math.log(10) / 3)
    const suffix = isByteFormat ? byteSuffix[suffixIndex] : numberSuffix[suffixIndex]

    const digitsToRemove = Math.floor(Math.log(value) / Math.log(10)) - 1
    const firstTwoDigits = Math.round(value / (10 ** digitsToRemove))

    return (firstTwoDigits / 10).toString() + suffix
  }
}
