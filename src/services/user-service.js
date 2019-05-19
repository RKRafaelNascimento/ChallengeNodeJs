const { userRepository } = require('../repositories/index')

async function find (query, field, params) {
  return userRepository.find(query, field, params)
}

async function filterBuild (query) {
  let filters = {
    query: {},
    field: {},
    params: {}
  }
  if (query.filter === 'websites') filters.field = 'website -_id'
  if (query.filter === 'work') {
    filters.field = 'name email company.name -_id'
    filters.params = { sort: { name: 1 } }
  }
  if (query.filter === 'address') filters.query = { 'address.suite': /suite/i }

  return filters
}

module.exports = {
  find,
  filterBuild
}
