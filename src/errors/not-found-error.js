const util = require('util')

function NotFoundError (error) {
  Error.captureStackTrace(this, this.constructor)
  this.error = this.constructor.name
  this.errorCode = error.code
  this.message = error.message
  this.stack = error.stack
}

util.inherits(NotFoundError, Error)

module.exports = NotFoundError
