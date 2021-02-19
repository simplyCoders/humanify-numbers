import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Percent tests.', () => {
    it('0 precision 3 ➜ 0.000%', () => {
        chai.expect(Numbers.Humanify(0, { format: "percent", precision:3 })).to.eql('0.000%')
    })
    it('0.01234 ➜ 1.2%', () => {
        chai.expect(Numbers.Humanify(0.01234, { format: "percent" })).to.eql('1.2%')
    })
    it('0.01234, precision 3 ➜ 1.234%', () => {
        chai.expect(Numbers.Humanify(0.01234, { format: "percent", precision: 3 })).to.eql('1.234%')
    })
    it('0.01234, precision 0 ➜ 1%', () => {
        chai.expect(Numbers.Humanify(0.01234, { format: "percent", precision: 0 })).to.eql('1%')
    })
    it('0.1234 ➜ 12.3%', () => {
        chai.expect(Numbers.Humanify(0.1234, { format: "percent" })).to.eql('12.3%')
    })
    it('1.234 ➜ 123.4%', () => {
        chai.expect(Numbers.Humanify(1.234, { format: "percent" })).to.eql('123.4%')
    })
    it('12.34 ➜ 1.2K%', () => {
        chai.expect(Numbers.Humanify(12.34, { format: "percent" })).to.eql('1.2K%')
    })
    it('123.4 ➜ 12.3K%', () => {
        chai.expect(Numbers.Humanify(123.4, { format: "percent" })).to.eql('12.3K%')
    })
    it('1234 ➜ 123.4K%', () => {
        chai.expect(Numbers.Humanify(1234, { format: "percent" })).to.eql('123.4K%')
    })
    it('-1234 ➜ -123.4K%', () => {
        chai.expect(Numbers.Humanify(-1234, { format: "percent" })).to.eql('-123.4K%')
    })
    it('9999 ➜ 999.9K%', () => {
        chai.expect(Numbers.Humanify(9999, { format: "percent" })).to.eql('999.9K%')
    })
    it('99999 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(99999, { format: "percent" })).to.eql('NaN')
    })
    it('0.00009999 ➜ 0.009%', () => {
        chai.expect(Numbers.Humanify(0.00009999, { format: "percent", precision: 3 })).to.eql('0.009%')
    })
    it('0.000009999 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(0.000009999, { format: "percent" })).to.eql('NaN')
    })
})
