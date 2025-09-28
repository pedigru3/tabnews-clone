import { createRouter } from "next-connect"
import controller from "infra/controller"
const router = createRouter()
import authentication from "models/authentication.js"
import session from "models/session.js"
import * as cookie from "cookie"

router.post(postHandler)

export default router.handler(controller.errorHandlers)

async function postHandler(request, response) {
  const userInputValues = request.body

  const authenticatedUser = await authentication.getAuthenticatedUser(
    userInputValues.email,
    userInputValues.password,
  )

  const newSession = await session.create(authenticatedUser.id)

  const setCookie = cookie.serialize("session_id", newSession.token, {
    path: "/",
    maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  })

  response.setHeader("Set-Cookie", setCookie)

  response.status(201).json(newSession)
}
