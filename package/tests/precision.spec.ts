import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Precision tests.', () => {
    it('1234.567890, precision 0 ➜ 1K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: 0 })).to.eql('1K')
    })
    it('1234.567890, precision 1 ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: 1 })).to.eql('1.2K')
    })
    it('1234.567890, precision 2 ➜ 1.23K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: 2 })).to.eql('1.23K')
    })
    it('1234.567890, precision 3 ➜ 1.234K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: 3 })).to.eql('1.234K')
    })
    it('1234.567890, precision 4 ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: 4 })).to.eql('1.2K')
    })
    it('1234.567890, precision -1 ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: -1 })).to.eql('1.2K')
    })
    it('1234.567890, precision 1.2 ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: -1 })).to.eql('1.2K')
    })
    it('1234.567890, precision ab ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.567890, { precision: "ab" })).to.eql('1.2K')
    })
    it('1000, precision 2 ➜ 1.00K', () => {
        chai.expect(Numbers.Humanify(1000.0, { precision: 2 })).to.eql('1.00K')
    })
})
