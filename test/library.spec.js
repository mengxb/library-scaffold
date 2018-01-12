import * as utils from '../lib/library'
import chai from 'chai'

const expect = chai.expect

describe('library', () => {
  it('Has date property', () => {
    expect(utils).to.have.property('date')
  })
})
