// React
// import { useContext } from "react"

// Context
// import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando o Context com Hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

// CSS
import "./Home.css"
import ChangeCounter from "../components/ChangeCounter"
import { useReducer } from "react"

function Home() {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 - Context mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 6 - Alterando Contexto Complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <>
      <h2 style={{ color: color }}>Home</h2>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando o valor do context */}
      <ChangeCounter />

      {/* 6 - Alterando Contexto Complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </>
  )
}

export default Home
