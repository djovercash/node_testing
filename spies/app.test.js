const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', db)
  it('should call spy correctly', () => {
    let spy = expect.createSpy()
    spy()
    expect(spy).toHaveBeenCalled()
  })

  it('should call saveUser with user object', () => {
    let email = 'abc@gmail.com'
    let password = 'abc123'
    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
