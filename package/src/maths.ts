// //////////////////////////////////////////////////////////////
// Meta data for supported maths
// Developed by simplyCoders, 2021.

export const mathsAvailable = ['floor', 'round', 'ceil']
export interface IMaths {
    [key: string]: any
}
export const maths: IMaths = {
  floor: Math.floor,
  round: Math.round,
  ceil: Math.ceil,
}
