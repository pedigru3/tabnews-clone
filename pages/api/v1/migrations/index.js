import migrationRunner from "node-pg-migrate"
import { join } from "path"
import database from "infra/database"
export default async function migrations(request, response) {
  const methods = ["GET", "POST"]

  if (!methods.includes(request.method)) {
    return response.status(405).end()
  }

  const dbClient = await database.getNewClient()

  const defaultMigrationOptions = {
    dbClient,
    dir: join("infra", "migrations"),
    direction: "up",
    dryRun: true,
    verbose: true,
    migrationsTable: "pgmigrations",
  }

  if (request.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions)
    await dbClient.end() // Close the client after the operation
    response.status(200).json(pendingMigrations)
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    })

    await dbClient.end()

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations)
    }

    response.status(200).json(migratedMigrations)
  }
}
