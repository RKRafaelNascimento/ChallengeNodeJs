const axios = require('axios')
const User = require('../models/user-model').User

async function uploadData () {
  const payload = await axios.get('https://jsonplaceholder.typicode.com/users')

  return payload
}

async function populateUsers () {
  let response = await uploadData()

  const users = await User.find()

  let isThereUser = users.length > 0 ? null : await User.insertMany(response.data)

  return isThereUser
}

module.exports = {
  populateUsers,
  uploadData
}
