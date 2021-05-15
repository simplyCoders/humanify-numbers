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
    it('12345 ➜ 12.3KiB', () => {
        chai.expect(Numbers.stringify(12345, { style: "space" })).to.eql('12.3KiB')
    })
    it('1234567 ➜ 1.2MiB', () => {
        chai.expect(Numbers.stringify(1234567, { style: "space" })).to.eql('1.2MiB')
    })
    it('1234567890 ➜ 1.2GiB', () => {
        chai.expect(Numbers.stringify(1234567890, { style: "space" })).to.eql('1.2GiB')
    })
    it('1234567890123 ➜ 1.2TiB', () => {
        chai.expect(Numbers.stringify(1234567890123, { style: "space" })).to.eql('1.2TiB')
    })
    it('1234567890123456 ➜ 1.2PiB', () => {
        chai.expect(Numbers.stringify(1234567890123456, { style: "space" })).to.eql('1.2PiB')
    })
    it('1234567890123456789 ➜ 1.2EiB', () => {
        chai.expect(Numbers.stringify(1234567890123456789, { style: "space" })).to.eql('1.2EiB')
    })
    it('123456789012345678901 ➜ 123.4EiB', () => {
        chai.expect(Numbers.stringify(123456789012345678901, { style: "space" })).to.eql('123.4EiB')
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
    it('999999999999999900, precision 2 ➜ 999.99PiB', () => {
        chai.expect(Numbers.stringify(999999999999999900, { style: "space", precision: 2 })).to.eql('999.99PiB')
    })
    it('0.9, precision 3 ➜ NaN', () => {
        chai.expect(Numbers.stringify(0.9, { style:"space", precision: 3 })).to.eql('NaN')
    })
})
