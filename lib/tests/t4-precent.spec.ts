import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Percent tests.', () => {
    it('0 precision 3 ➜ 0%', () => {
        chai.expect(Numbers.stringify(0, { style: "percent", precision:3 })).to.eql('0%')
    })
    it('0.01234 ➜ 1.2%', () => {
        chai.expect(Numbers.stringify(0.01234, { style: "percent" })).to.eql('1.2%')
    })
    it('0.01234, precision 3 ➜ 1.234%', () => {
        chai.expect(Numbers.stringify(0.01234, { style: "percent", precision: 3 })).to.eql('1.234%')
    })
    it('0.01234, precision 0 ➜ 1%', () => {
        chai.expect(Numbers.stringify(0.01234, { style: "percent", precision: 0 })).to.eql('1%')
    })
    it('0.1234 ➜ 12.3%', () => {
        chai.expect(Numbers.stringify(0.1234, { style: "percent" })).to.eql('12.3%')
    })
    it('1.234 ➜ 123.4%', () => {
        chai.expect(Numbers.stringify(1.234, { style: "percent" })).to.eql('123.4%')
    })
    it('12.34 ➜ 1.2K%', () => {
        chai.expect(Numbers.stringify(12.34, { style: "percent" })).to.eql('1.2K%')
    })
    it('123.4 ➜ 12.3K%', () => {
        chai.expect(Numbers.stringify(123.4, { style: "percent" })).to.eql('12.3K%')
    })
    it('1234 ➜ 123.4K%', () => {
        chai.expect(Numbers.stringify(1234, { style: "percent" })).to.eql('123.4K%')
    })
    it('-1234 ➜ -123.4K%', () => {
        chai.expect(Numbers.stringify(-1234, { style: "percent" })).to.eql('-123.4K%')
    })
    it('9999 ➜ 999.9K%', () => {
        chai.expect(Numbers.stringify(9999, { style: "percent" })).to.eql('999.9K%')
    })
    it('99999 ➜ NaN', () => {
        chai.expect(Numbers.stringify(99999, { style: "percent" })).to.eql('NaN')
    })
    it('0.00009999 ➜ 0.009%', () => {
        chai.expect(Numbers.stringify(0.00009999, { style: "percent", precision: 3 })).to.eql('0.009%')
    })
    it('0.000009999 ➜ NaN', () => {
        chai.expect(Numbers.stringify(0.000009999, { style: "percent" })).to.eql('NaN')
    })
})
