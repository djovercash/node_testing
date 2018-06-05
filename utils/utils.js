module.exports.add = (a, b) => a + b

module.exports.square = (a) => a * a

module.exports.setName = (user, fullName) => {
  let nameArr = fullName.split(" ")
  user.firstName = nameArr[0]
  user.lastName = nameArr[1]
  return user
}
