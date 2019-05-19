const InvalidArgumentError = require('../errors/invalid-argument-error')
const NotFoundError = require('../errors/not-found-error')
const InternalServerError = require('../errors/internal-server-error')

const build = (statusCode, body = undefined) => ({
  body: JSON.stringify(body)
})

const notFound = body => build(404, body)
const success = body => build(200, body)
const errors = body => {
  let errorBody = {}
  if (body instanceof InvalidArgumentError) {
    errorBody = build(422, {
      statusCode: 422,
      errors: [{ error: body.error, errorCode: body.errorCode, message: body.message }]
    })
  } else if (body instanceof NotFoundError) {
    errorBody = notFound(body)
  } else if (body instanceof InternalServerError) {
    errorBody = build(500, {
      statusCode: 500,
      errors: [{ error: body.error, errorCode: body.errorCode, message: body.message }]
    })
  } else {
    let err = {
      statusCode: 500,
      errors: [{ error: 'InternalServerError', errorCode: 500, message: body }]
    }

    errorBody = build(500, err)
  }

  return errorBody
}

module.exports = {
  success,
  errors,
  notFound
}
