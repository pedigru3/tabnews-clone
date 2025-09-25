import orchestrator from "tests/orchestrator.js"
import { version as uuidVersion } from "uuid"
import user from "models/user.js"
import password from "models/password.js"

beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await orchestrator.clearDatabase()
  await orchestrator.runPendingMigrations()
})

describe("PATCH /api/v1/users/[username]", () => {
  describe("Anonymous user", () => {
    test("With nonexistent username", async () => {
      const response2 = await fetch(
        "http://localhost:3000/api/v1/users/changeUsername",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "changeUsername2",
          }),
        },
      )

      expect(response2.status).toBe(404)

      const responseBody = await response2.json()

      expect(responseBody).toEqual({
        name: "NotFoundError",
        message: "O username informado não foi encontrado no sistema.",
        action: "Verifique se o username está digitado corretamente.",
        status_code: 404,
      })
    })

    test("With duplicated 'username'", async () => {
      const user1Response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "user1",
          email: "user1@curso.dev",
          password: "abc123",
        }),
      })

      expect(user1Response.status).toBe(201)

      const user2Response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "user2",
          email: "user2@curso.dev",
          password: "abc123",
        }),
      })

      expect(user2Response.status).toBe(201)

      const response = await fetch("http://localhost:3000/api/v1/users/user2", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "user1",
        }),
      })

      expect(response.status).toBe(400)

      const responseBody = await response.json()

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "O username informado já está sendo utilizado.",
        action: "Utilize outro username para realizar esta operação.",
        status_code: 400,
      })
    })

    test("With duplicated 'email'", async () => {
      const user1Response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "duplicatedEmail",
          email: "duplicatedEmail1@curso.dev",
          password: "abc123",
        }),
      })

      expect(user1Response.status).toBe(201)

      const user2Response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "duplicatedEmail2",
          email: "duplicatedEmail2@curso.dev",
          password: "abc123",
        }),
      })

      expect(user2Response.status).toBe(201)

      const response = await fetch(
        "http://localhost:3000/api/v1/users/duplicatedEmail2",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "duplicatedEmail1@curso.dev",
          }),
        },
      )

      expect(response.status).toBe(400)

      const responseBody = await response.json()

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "O email informado já está sendo utilizado.",
        action: "Utilize outro email para realizar esta operação.",
        status_code: 400,
      })
    })

    test("With unique 'username'", async () => {
      const responseUser = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "uniqueUser1",
          email: "uniqueUser1@curso.dev",
          password: "abc123",
        }),
      })

      expect(responseUser.status).toBe(201)

      const response = await fetch(
        "http://localhost:3000/api/v1/users/uniqueUser1",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "uniqueUser2",
          }),
        },
      )

      expect(response.status).toBe(200)

      const responseBody = await response.json()

      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "uniqueUser2",
        email: "uniqueUser1@curso.dev",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      })

      expect(uuidVersion(responseBody.id)).toBe(4)
      expect(Date.parse(responseBody.created_at)).not.toBeNaN()
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN()

      expect(responseBody.updated_at > responseBody.created_at).toBe(true)
    })

    test("With unique 'email'", async () => {
      const responseUser = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "uniqueEmail",
          email: "uniqueEmail@curso.dev",
          password: "abc123",
        }),
      })

      expect(responseUser.status).toBe(201)

      const response = await fetch(
        "http://localhost:3000/api/v1/users/uniqueEmail",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "uniqueEmail2@curso.dev",
          }),
        },
      )

      expect(response.status).toBe(200)
      const responseBody = await response.json()

      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "uniqueEmail",
        email: "uniqueEmail2@curso.dev",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      })

      expect(uuidVersion(responseBody.id)).toBe(4)
      expect(Date.parse(responseBody.created_at)).not.toBeNaN()
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN()

      expect(responseBody.updated_at > responseBody.created_at).toBe(true)
    })

    test("With new 'password'", async () => {
      const responseUser = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "newPassword",
          email: "newPassword@curso.dev",
          password: "abc123",
        }),
      })

      expect(responseUser.status).toBe(201)

      const response = await fetch(
        "http://localhost:3000/api/v1/users/newPassword",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: "newPassword",
          }),
        },
      )

      expect(response.status).toBe(200)
      const responseBody = await response.json()

      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "newPassword",
        email: "newPassword@curso.dev",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      })

      expect(uuidVersion(responseBody.id)).toBe(4)
      expect(Date.parse(responseBody.created_at)).not.toBeNaN()
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN()

      expect(responseBody.updated_at > responseBody.created_at).toBe(true)

      const userInDatabase = await user.findOneByUsername("newPassword")
      const correctPasswordMatch = await password.compare(
        "newPassword",
        userInDatabase.password,
      )

      expect(correctPasswordMatch).toBe(true)

      const incorrectPasswordMatch = await password.compare(
        "abc1234",
        userInDatabase.password,
      )

      expect(incorrectPasswordMatch).toBe(false)
    })
  })
})
