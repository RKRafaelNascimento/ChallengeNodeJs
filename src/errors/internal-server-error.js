const util = require('util')

function InternalServerError (error) {
  Error.captureStackTrace(this, this.constructor)
  this.error = this.constructor.name
  this.errorCode = error.code
  this.message = error.message
  this.stack = error.stack
}

util.inherits(InternalServerError, Error)

module.exports = InternalServerError
