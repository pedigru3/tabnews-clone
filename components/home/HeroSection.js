import Button from "../common/Button"
import Container from "../common/Container"
import FeaturesGrid from "./FeaturesGrid"

export default function HeroSection() {
  return (
    <main
      style={{
        padding: "4rem 0",
        textAlign: "center",
      }}
    >
      <Container>
        <h2
          style={{
            color: "white",
            fontSize: "3rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Gestão Completa para sua Igreja
        </h2>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1.2rem",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            lineHeight: "1.6",
          }}
        >
          Organize membros, eventos, finanças e muito mais em uma plataforma
          moderna e fácil de usar.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <Button variant="primary">Começar Agora</Button>
          <Button variant="secondary">Saiba Mais</Button>
        </div>

        <FeaturesGrid />
      </Container>
    </main>
  )
}
