const request = require('supertest')
const expect = require('expect')

var app = require('../server/server').app

describe('Server', () => {
  describe('GET /', () => {
    it('should return error', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page Not Found"
          })
        })
        .end(done)
    })
  })

  describe('GET /users', () => {
    it('should include user with first name Drew and age 30', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: "Drew",
            age: 30
          })
        })
        .end(done)
    })
  })
})
