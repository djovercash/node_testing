module.exports.add = (a, b) => a + b

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 1000)
}

module.exports.square = (a) => a * a

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a)
  }, 1000)
}

module.exports.setName = (user, fullName) => {
  let nameArr = fullName.split(" ")
  user.firstName = nameArr[0]
  user.lastName = nameArr[1]
  return user
}
