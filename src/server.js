const fastify = require('fastify')({ logger: true })
const db = require('./infrastructure/mongoDB/client')
const { populateUsers } = require('./utils/create-test-data')

fastify.register(require('fastify-cors'))

const start = async () => {
  try {
    await db.start()
    await fastify.listen(process.env.PORT || 3000)
    await populateUsers()

    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()