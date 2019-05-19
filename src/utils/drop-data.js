const User = require('../models/user-model').User

async function dropUsers () {
  const response = await User.deleteMany()

  return response
}

module.exports = {
  dropUsers
}
