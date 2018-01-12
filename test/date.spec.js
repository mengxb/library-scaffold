import {date} from '../lib/library'
import chai from 'chai'

const expect = chai.expect

describe('date', () => {
  it('Has getCurrentDate property', () => {
    expect(date).to.be.have.property('getCurrentDate')
  })
  it('getCurrentDate not throw error', () => {
    expect(date.getCurrentDate).to.not.throw()
  })
})
