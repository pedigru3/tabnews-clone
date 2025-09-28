export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "1rem 2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#333",
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            IgrejaConnect
          </h1>
          <nav>
            <button
              style={{
                background: "#667eea",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
            >
              Entrar
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
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
          <button
            style={{
              background: "white",
              color: "#667eea",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s",
            }}
          >
            Começar Agora
          </button>
          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Saiba Mais
          </button>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              👥
            </div>
            <h3
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Gestão de Membros
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
              }}
            >
              Cadastre e organize informações dos membros da sua igreja de forma
              segura e eficiente.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              📅
            </div>
            <h3
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Eventos e Cultos
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
              }}
            >
              Organize eventos, cultos e atividades da igreja com lembretes
              automáticos.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              💰
            </div>
            <h3
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Controle Financeiro
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
              }}
            >
              Gerencie dízimos, ofertas e despesas da igreja com relatórios
              detalhados.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          color: "rgba(255, 255, 255, 0.8)",
          textAlign: "center",
          padding: "2rem",
          marginTop: "4rem",
        }}
      >
        <p style={{ margin: 0 }}>
          © 2024 IgrejaConnect. Desenvolvido com ❤️ para servir a comunidade
          cristã.
        </p>
      </footer>
    </div>
  )
}
