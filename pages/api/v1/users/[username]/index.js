import { createRouter } from "next-connect"
import controller from "infra/controller"
const router = createRouter()
import user from "models/users.js"

router.get(getHandler)

export default router.handler(controller.errorHandlers)

async function getHandler(request, response) {
  const { username } = await request.query
  const userFound = await user.findOneByUsername(username)
  response.status(200).json(userFound)
}
