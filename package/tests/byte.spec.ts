import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Byte tests.', () => {
    it('0 ➜ 0.0B', () => {
        chai.expect(Numbers.Humanify(0, { format: "byte" })).to.eql('0.0B')
    })
    it('1 ➜ 1.0B', () => {
        chai.expect(Numbers.Humanify(1, { format: "byte" })).to.eql('1.0B')
    })
    it('12345 ➜ 12.3KB', () => {
        chai.expect(Numbers.Humanify(12345, { format: "byte" })).to.eql('12.3KB')
    })
    it('1234567 ➜ 1.2MB', () => {
        chai.expect(Numbers.Humanify(1234567, { format: "byte" })).to.eql('1.2MB')
    })
    it('1234567890 ➜ 1.2GB', () => {
        chai.expect(Numbers.Humanify(1234567890, { format: "byte" })).to.eql('1.2GB')
    })
    it('1.2 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(1.2, { format: "byte" })).to.eql('NaN')
    })
    it('-1 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(-1, { format: "byte" })).to.eql('NaN')
    })
    it('999999999999999900, precision 2 ➜ 999.99PB', () => {
        chai.expect(Numbers.Humanify(999999999999999900, { format: "byte", precision: 2 })).to.eql('999.99PB')
    })
    it('9999999999999999999, precision 2 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(9999999999999999999, { format: "byte", precision: 2 })).to.eql('NaN')
    })
    it('0.9, precision 3 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(0.9, { format:"byte", precision: 3 })).to.eql('NaN')
    })
})
