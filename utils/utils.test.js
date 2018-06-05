//BDD Behavior Diven Development
const utils = require('./utils')
const expect = require('expect')

it('should add two numbers', () => {
  let res = utils.add(33, 11)

  expect(res).toBe(44).toBeA('number')


  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
})

it('should add two numbers with async principals', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done()
  })
})

it('should square a number', () => {
  let res = utils.square(20)

  expect(res).toBe(400).toBeA('number')

  // if (res !== 400) {
  //   throw new Error(`Expected 400, but got ${res}`)
  // }
})

it('should square a number with async principals', (done) => {
  utils.asyncSquare(20, (square) => {
    expect(square).toBe(400).toBeA('number')
    done()
  })
})

it('should expect some values', () => {
  // expect(12).toNotBe(11)
  // expect({name: "Drew"}).toEqual({name: "Drew"})
  // expect([2, 3, 4]).toExclude(1)
  // expect([2, 3, 4]).toInclude(3)
  // expect({
  //   name: "Drew",
  //   age: 30,
  //   location: "New York"
  // }).toInclude({
  //   age: 30
  // })
  // expect({
  //   name: "Drew",
  //   age: 30,
  //   location: "New York"
  // }).toExclude({
  //   age: 20
  // })
})

it('should verify first and last names are set', () => {
  let user = utils.setName({location: "New York", age: 30}, "Drew Overcash")
  expect(user).toInclude({firstName: "Drew", lastName: "Overcash"})
})
