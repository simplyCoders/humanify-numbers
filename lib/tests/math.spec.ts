import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Math tests.', () => {
    it('123450 ➜ 123.4K', () => {
        chai.expect(Numbers.Humanify(123450)).to.eql('123.4K')
    })
    it('123450 floor ➜ 123.4K', () => {
        chai.expect(Numbers.Humanify(123450, { math: "floor" })).to.eql('123.4K')
    })
    it('123450 round ➜ 123.5K', () => {
        chai.expect(Numbers.Humanify(123450, { math: "round" })).to.eql('123.5K')
    })
    it('123440 floor ➜ 123.4K', () => {
        chai.expect(Numbers.Humanify(123440, { math: "floor" })).to.eql('123.4K')
    })
    it('123440 round ➜ 123.4K', () => {
        chai.expect(Numbers.Humanify(123440, { math: "round" })).to.eql('123.4K')
    })
    it('123440 ceil ➜ 123.5K', () => {
        chai.expect(Numbers.Humanify(123440, { math: "ceil" })).to.eql('123.5K')
    })
})
