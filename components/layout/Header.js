export default function Header() {
  return (
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
  )
}
