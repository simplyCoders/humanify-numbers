import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run tests
// ----------------------------------------------
describe('Named numbers tests.', () => {
    it('0 ➜ 0', () => {
        chai.expect(Numbers.stringify(0, { style: "namedNumber" })).to.eql('0')
    })
    it('0.1 ➜ 0.1', () => {
        chai.expect(Numbers.stringify(0.1, { style: "namedNumber" })).to.eql('0.1')
    })
    it('1234.5678 ➜ 1.2 Thousands', () => {
        chai.expect(Numbers.stringify(1234.5678, { style: "namedNumber" })).to.eql('1.2 Thousands')
    })
    it('1000 ➜ 1 Thousand', () => {
        chai.expect(Numbers.stringify(1000, { style: "namedNumber" })).to.eql('1 Thousand')
    })
    it('1234567 ➜ 1.2 Millions', () => {
        chai.expect(Numbers.stringify(1234567, { style: "namedNumber" })).to.eql('1.2 Millions')
    })
})
