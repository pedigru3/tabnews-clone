import { InternalServerError, MethodNotAllowedError } from "infra/errors"

function onErrorHandler(error, request, response) {
  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  })

  console.log(publicErrorObject)

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
