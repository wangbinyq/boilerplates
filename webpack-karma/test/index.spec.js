import app from '../src/index'

describe('app', () => {
  it('is defined', () => {
    expect(app).toBeDefined()
  })

  it('hello world!', () => {
    expect(app()).toBe('Hello World!')
  })
})
