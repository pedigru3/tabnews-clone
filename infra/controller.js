import {
  InternalServerError,
  MethodNotAllowedError,
  ValidationError,
} from "infra/errors"

function onErrorHandler(error, request, response) {
  if (error instanceof ValidationError) {
    return response.status(error.statusCode).json(error)
  }

  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  })

  response.status(publicErrorObject.statusCode).json(publicErrorObject)
}

function onNoMatchHanler(request, response) {
  const publicErrorObject = new MethodNotAllowedError()
  response.status(publicErrorObject.statusCode).json(publicErrorObject)
}

const controller = {
  errorHandlers: {
    onError: onErrorHandler,
    onNoMatch: onNoMatchHanler,
  },
}

export default controller
