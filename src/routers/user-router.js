const { userService } = require('../services/index')
async function routes (fastify, options) {
  fastify.get('/user', async (request, reply) => {
    try {
      let query = {}
      let params = {}
      let field = {}

      if (request.query.filter !== undefined) {
        let filters = await userService.filterBuild(request.query)
        query = filters.query
        field = filters.field
        params = filters.params
      }

      let response = await userService.find(query, field, params)

      reply.status(200).send(response)
    } catch (err) {}
  })
}
module.exports = routes
