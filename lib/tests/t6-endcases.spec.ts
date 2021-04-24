import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run basic tests
// ----------------------------------------------
describe('Endcases tests.', () => {
    it('abc ➜ NaN', () => {
        const noTypeFunction: any = Numbers.stringify
        chai.expect(noTypeFunction("abc")).to.eql('NaN')
    })
})