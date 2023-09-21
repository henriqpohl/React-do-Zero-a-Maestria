import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Henrique")

  return (
    <div>
      <h2>Conditional Render</h2>
      <h3>Isso será exibido?</h3>
      {x && <p>Se X for true, sim!</p>}
      {!x && <p>Agora X é falso!</p>}
      <h2>IF Ternário</h2>
      {name === "Henrique" ? (
        <div>
          <p>O nome é Henrique</p>
        </div>
      ) : (
        <div>
          <p>nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender