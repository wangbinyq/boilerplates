import app from '../src/index'

describe('app', () => {
  it('is defined', () => {
    assert.isDefined(app)
  })

  it('hello world!', () => {
    assert.equal(app(), 'Hello World!')
  })
})
