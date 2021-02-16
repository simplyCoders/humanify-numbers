import * as chai from 'chai'
import { describe, it } from 'mocha'

import { Numbers } from '../src'

// ----------------------------------------------
// Run basic tests
// ----------------------------------------------
describe('Basic Numbers tests.', () => {
    it('0 ➜ 0', () => {
        chai.expect(Numbers.Humanify(0)).to.eql('0')
    })
    it('1.234 ➜ 1.2', () => {
        chai.expect(Numbers.Humanify(1.234)).to.eql('1.2')
    })
    it('12.34 ➜ 12.3', () => {
        chai.expect(Numbers.Humanify(12.34)).to.eql('12.3')
    })
    it('123.456 ➜ 123.4', () => {
        chai.expect(Numbers.Humanify(123.456)).to.eql('123.4')
    })
    it('1234.5678 ➜ 1.2K', () => {
        chai.expect(Numbers.Humanify(1234.5678)).to.eql('1.2K')
    })
    it('12345 ➜ 12.3K', () => {
        chai.expect(Numbers.Humanify(12345)).to.eql('12.3K')
    })
    it('123456 ➜ 123.4M', () => {
        chai.expect(Numbers.Humanify(123456)).to.eql('123.4K')
    })
    it('1234567 ➜ 1.2M', () => {
        chai.expect(Numbers.Humanify(1234567)).to.eql('1.2M')
    })
    it('12345678 ➜ 12.3M', () => {
        chai.expect(Numbers.Humanify(12345678)).to.eql('12.3M')
    })
    it('123456789 ➜ 123.4M', () => {
        chai.expect(Numbers.Humanify(123456789)).to.eql('123.4M')
    })
    it('1234567890 ➜ 1.2B', () => {
        chai.expect(Numbers.Humanify(1234567890)).to.eql('1.2B')
    })
})

describe('Binary tests.', () => {
    it('0 ➜ 0B', () => {
        chai.expect(Numbers.Humanify(0, {format:"byte"})).to.eql('0B')
    })
    it('1 ➜ 1B', () => {
        chai.expect(Numbers.Humanify(1, {format:"byte"})).to.eql('1B')
    })
    it('12345 ➜ 12.3KB', () => {
        chai.expect(Numbers.Humanify(12345, {format:"byte"})).to.eql('12.3KB')
    })
    it('1234567 ➜ 1.2MB', () => {
        chai.expect(Numbers.Humanify(1234567, {format:"byte"})).to.eql('1.2MB')
    })
    it('1234567890 ➜ 1.2GB', () => {
        chai.expect(Numbers.Humanify(1234567890, {format:"byte"})).to.eql('1.2GB')
    })
    it('1.2 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(1.2, {format:"byte"})).to.eql('NaN')
    })
    it('-1 ➜ NaN', () => {
        chai.expect(Numbers.Humanify(-1, {format:"byte"})).to.eql('NaN')
    })
})

describe('Precision tests.', () => {
    it('1234.567890, precision 0 ➜ 1k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:0})).to.eql('1K')
    })
    it('1234.567890, precision 1 ➜ 1.2k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:1})).to.eql('1.2K')
    })
    it('1234.567890, precision 2 ➜ 1.23k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:2})).to.eql('1.23K')
    })
    it('1234.567890, precision 3 ➜ 1.234k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:3})).to.eql('1.234K')
    })
    it('1234.567890, precision 4 ➜ 1.2k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:4})).to.eql('1.2K')
    })
    it('1234.567890, precision -1 ➜ 1.2k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:-1})).to.eql('1.2K')
    })
    it('1234.567890, precision 1.2 ➜ 1.2k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:-1})).to.eql('1.2K')
    })
    it('1234.567890, precision ab ➜ 1.2k', () => {
        chai.expect(Numbers.Humanify(1234.567890, {precision:"ab"})).to.eql('1.2K1')
    })
})

describe('Endcases tests.', () => {
    it('abc ➜ NaN', () => {
        const noTypeFunction:any = Numbers.Humanify
        chai.expect(noTypeFunction("abc")).to.eql('NaN')
    })    
})