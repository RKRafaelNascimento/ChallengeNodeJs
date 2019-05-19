const util = require('util')

function InvalidArgumentError (error) {
  Error.captureStackTrace(this, this.constructor)
  this.error = this.constructor.name
  this.errorCode = error.code
  this.message = error.message
  this.stack = error.stack
}

util.inherits(InvalidArgumentError, Error)

module.exports = InvalidArgumentError
