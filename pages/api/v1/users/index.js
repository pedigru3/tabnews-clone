import { createRouter } from "next-connect"
import controller from "infra/controller"
const router = createRouter()
import user from "models/users.js"

router.post(postHandler)

export default router.handler(controller.errorHandlers)

async function postHandler(request, response) {
  const userInputValues = request.body
  const newUser = await user.create(userInputValues)
  response.status(201).json(newUser)
}
