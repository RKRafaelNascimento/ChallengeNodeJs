const User = require('../models/user-model').User

async function find (query = {}, field = {}, params = {}) {
  try {
    let users = await User.find(query, field, params)

    return users
  } catch (error) {
    throw error
  }
}

module.exports = {
  find
}
