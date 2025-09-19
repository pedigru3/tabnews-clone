const { exec } = require("node:child_process")

function servicesInit() {
  const devProcess = exec(
    "npm run services:up && npm run services:wait:database && npm run migrations:up && next dev",
  )

  devProcess.stdout.on("data", (data) => {
    process.stdout.write(data)
  })

  console.log("Verificando serviços...")

  process.on("SIGINT", () => {
    stopDatabase()
  })

  function stopDatabase() {
    exec(
      "docker compose -f infra/compose.yaml stop",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao parar database: ${error}`)
        }
        console.log(stdout)
        console.error(stderr)
      },
    )
  }
}

servicesInit()
