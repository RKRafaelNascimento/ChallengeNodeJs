const mongoose = require('mongoose')
const port = process.env.PORT_MONGO || 27017
const connection = process.env.MONGO_HOST || 'mongodb://localhost:' + port + '/challenge'

module.exports.start = async () => {
  mongoose
    .connect(connection, { useNewUrlParser: true })
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))
}
