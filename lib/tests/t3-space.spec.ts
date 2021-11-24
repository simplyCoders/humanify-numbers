import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('space tests.', () => {
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.stringify(0, { format: "byte" })).to.eql('0B')
    })
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.stringify(0, { style: "storage" })).to.eql('0B')
    })
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.stringify(0, { style: "space" })).to.eql('0B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.stringify(1, { format: "byte" })).to.eql('1B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.stringify(1, { style: "storage" })).to.eql('1B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.stringify(1, { style: "space" })).to.eql('1B')
    })
    it('12345 ➜ 12KiB', () => {
        chai.expect(Numbers.stringify(12345, { style: "space" })).to.eql('12KiB')
    })
    it('1234567 ➜ 1.1MiB', () => {
        chai.expect(Numbers.stringify(1234567, { style: "space" })).to.eql('1.1MiB')
    })
    it('1234567890 ➜ 1.1GiB', () => {
        chai.expect(Numbers.stringify(1234567890, { style: "space" })).to.eql('1.1GiB')
    })
    it('1234567890123 ➜ 1.1TiB', () => {
        chai.expect(Numbers.stringify(1234567890123, { style: "space" })).to.eql('1.1TiB')
    })
    it('1234567890123456 ➜ 1PiB', () => {
        chai.expect(Numbers.stringify(1234567890123456, { style: "space" })).to.eql('1PiB')
    })
    it('1234567890123456789 ➜ 1EiB', () => {
        chai.expect(Numbers.stringify(1234567890123456789, { style: "space" })).to.eql('1EiB')
    })
    it('123456789012345678901 ➜ 107EiB', () => {
        chai.expect(Numbers.stringify(123456789012345678901, { style: "space" })).to.eql('107EiB')
    })
    it('1234567890123456789012 ➜ NaN', () => {
        chai.expect(Numbers.stringify(1234567890123456789012, { style: "space" })).to.eql('NaN')
    })
    it('1.2 ➜ NaN', () => {
        chai.expect(Numbers.stringify(1.2, { style: "space" })).to.eql('NaN')
    })
    it('-1 ➜ NaN', () => {
        chai.expect(Numbers.stringify(-1, { style: "space" })).to.eql('NaN')
    })
    it('999999999999999900, precision 2 ➜ 888.17PiB', () => {
        chai.expect(Numbers.stringify(999999999999999900, { style: "space", precision: 2 })).to.eql('888.17PiB')
    })
    it('0.9, precision 3 ➜ NaN', () => {
        chai.expect(Numbers.stringify(0.9, { style:"space", precision: 3 })).to.eql('NaN')
    })
})
