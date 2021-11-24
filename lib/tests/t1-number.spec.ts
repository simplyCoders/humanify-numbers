import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Numbers tests.', () => {
    it('0 ➜ 0', () => {
        chai.expect(Numbers.stringify(0)).to.eql('0')
    })
    it('0.1 ➜ 0.1', () => {
        chai.expect(Numbers.stringify(0.1)).to.eql('0.1')
    })
    it('0.01 ➜ 0', () => {
        chai.expect(Numbers.stringify(0.01)).to.eql('0')
    })
    it('1.234 ➜ 1.2', () => {
        chai.expect(Numbers.stringify(1.234)).to.eql('1.2')
    })
    it('12.34 ➜ 12.3', () => {
        chai.expect(Numbers.stringify(12.34)).to.eql('12.3')
    })
    it('123.456 ➜ 123.4', () => {
        chai.expect(Numbers.stringify(123.456)).to.eql('123.4')
    })
    it('1234.5678 ➜ 1.2K', () => {
        chai.expect(Numbers.stringify(1234.5678)).to.eql('1.2K')
    })
    it('12345 ➜ 12.3K', () => {
        chai.expect(Numbers.stringify(12345)).to.eql('12.3K')
    })
    it('123456 ➜ 123.4K', () => {
        chai.expect(Numbers.stringify(123456)).to.eql('123.4K')
    })
    it('1234567 ➜ 1.2M', () => {
        chai.expect(Numbers.stringify(1234567)).to.eql('1.2M')
    })
    it('12345678 ➜ 12.3M', () => {
        chai.expect(Numbers.stringify(12345678)).to.eql('12.3M')
    })
    it('123456789 ➜ 123.4M', () => {
        chai.expect(Numbers.stringify(123456789)).to.eql('123.4M')
    })
    it('1234567890 ➜ 1.2B', () => {
        chai.expect(Numbers.stringify(1234567890)).to.eql('1.2B')
    })
    it('999999999999999, precision 2 ➜ 999.99T', () => {
        chai.expect(Numbers.stringify(999999999999999, { precision: 2 })).to.eql('999.99T')
    })
    it('9999999999999999, precision 2 ➜ NaN', () => {
        chai.expect(Numbers.stringify(9999999999999999, { precision: 2 })).to.eql('NaN')
    })
    it('0.009, precision 3 ➜ 0.009', () => {
        chai.expect(Numbers.stringify(0.009, { precision: 3 })).to.eql('0.009')
    })
    it('0.0009, precision 3 ➜ NaN', () => {
        chai.expect(Numbers.stringify(0.0009, { precision: 3 })).to.eql('NaN')
    })
})
