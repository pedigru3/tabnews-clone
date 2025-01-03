import database from "infra/database.js"
import orchestrator from "tests/orchestrator.js"

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;")
}

beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await clearDatabase()
})

test("Get to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations")
  const responseBody = await response.json()

  expect(process.env.POSTGRES_HOST).toBe("localhost")

  expect(Array.isArray(responseBody)).toBe(true)
  expect(responseBody.length).toBeGreaterThan(0)
})
