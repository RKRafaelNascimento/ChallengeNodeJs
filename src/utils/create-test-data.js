const axios = require('axios')
const User = require('../models/user-model').User

async function getUsers () {
  const payload = await axios.get('https://jsonplaceholder.typicode.com/users')

  return payload
}

async function populateUsers () {
  let response = await getUsers()

  const users = await User.find()

  let isThereUser = users.length > 0 ? undefined : await User.insertMany(response.data)

  return isThereUser
}

module.exports = {
  populateUsers,
  getUsers
}
