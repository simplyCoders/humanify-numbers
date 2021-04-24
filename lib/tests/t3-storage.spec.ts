import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('storage tests.', () => {
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.stringify(0, { format: "byte" })).to.eql('0B')
    })
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.stringify(0, { style: "storage" })).to.eql('0B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.stringify(1, { format: "byte" })).to.eql('1B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.stringify(1, { style: "storage" })).to.eql('1B')
    })
    it('12345 ➜ 12.3KB', () => {
        chai.expect(Numbers.stringify(12345, { style: "storage" })).to.eql('12.3KB')
    })
    it('1234567 ➜ 1.2MB', () => {
        chai.expect(Numbers.stringify(1234567, { style: "storage" })).to.eql('1.2MB')
    })
    it('1234567890 ➜ 1.2GB', () => {
        chai.expect(Numbers.stringify(1234567890, { style: "storage" })).to.eql('1.2GB')
    })
    it('1.2 ➜ NaN', () => {
        chai.expect(Numbers.stringify(1.2, { style: "storage" })).to.eql('NaN')
    })
    it('-1 ➜ NaN', () => {
        chai.expect(Numbers.stringify(-1, { style: "storage" })).to.eql('NaN')
    })
    it('999999999999999900, precision 2 ➜ 999.99PB', () => {
        chai.expect(Numbers.stringify(999999999999999900, { style: "storage", precision: 2 })).to.eql('999.99PB')
    })
    it('9999999999999999999, precision 2 ➜ NaN', () => {
        chai.expect(Numbers.stringify(9999999999999999999, { style: "storage", precision: 2 })).to.eql('NaN')
    })
    it('0.9, precision 3 ➜ NaN', () => {
        chai.expect(Numbers.stringify(0.9, { style:"storage", precision: 3 })).to.eql('NaN')
    })
})
