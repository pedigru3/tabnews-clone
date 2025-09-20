import orchestrator from "tests/orchestrator.js"

async function clearDatabase() {
  await orchestrator.clearDatabase()
}

beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await clearDatabase()
})

describe("GET /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations")
      const responseBody = await response.json()

      expect(process.env.POSTGRES_HOST).toBe("localhost")

      expect(Array.isArray(responseBody)).toBe(true)
      expect(responseBody.length).toBeGreaterThan(0)
    })
  })
})
