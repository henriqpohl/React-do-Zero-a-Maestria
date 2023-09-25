import { useState } from "react"
import "./App.css"
import MyComponents from "./components/MyComponents"
import Title from "./components/Title"

function App() {
  const n = 15

  const [name] = useState("Henrique")

  const redTitle = true

  return (
    <>
      <div className="App">
        {/* CSS Global */}
        <h1>React e CSS</h1>

        {/* CSS de Componente */}
        <MyComponents />
        <p>Este parágrafo é do App JS</p>
        <p>Este parágrafo é do App JS</p>

        {/* Inline CSS*/}
        <p
          style={{
            color: "magenta",
            padding: "20px",
            borderTop: "2px solid red",
          }}
        >
          Este elemento foi estilizado de forma inline
        </p>
        <p
          style={{
            color: "magenta",
            padding: "20px",
            borderTop: "2px solid red",
          }}
        >
          Este elemento foi estilizado de forma inline
        </p>

        {/* CSS Inline Dinâmico */}
        <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
          CSS Dinâmico
        </h2>
        <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
          CSS Dinâmico
        </h2>
        <h2
          style={
            name === "Henrique"
              ? { color: "green", backgroundColor: "#000" }
              : null
          }
        >
          Teste nome
        </h2>

        {/* Classe CSS Dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este Título vai ter classe dinâmica</h2>

        {/* CSS Modules */}
        <Title />
      </div>
    </>
  )
}

export default App
