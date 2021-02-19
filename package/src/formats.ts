// //////////////////////////////////////////////////////////////
// Meta data for supported formats
// Developed by simplyCoders, 2021.

export const formatsAvailable = ['number', 'byte', 'percent']
export interface IFormats {
    [key: string]: any
}
export const formats: IFormats = {
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
