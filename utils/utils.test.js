//BDD Behavior Diven Development
const utils = require('./utils')

it('should add two numbers', () => {
  let res = utils.add(33, 11)

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`)
  }
})

it('should square a number', () => {
  let res = utils.square(20)

  if (res !== 400) {
    throw new Error(`Expected 400, but got ${res}`)
  }
})
