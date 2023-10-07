// React
// import { useContext } from "react"

// Context
// import { CounterContext } from "../context/CounterContext"

// Custom Hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

// CSS
import "./About.css"

function About() {

  const { color, dispatch } = useTitleColorContext()

  // 6 - Alterando Contexto Complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()
  return (
    <>
      <h2 style={{ color: color }}>About</h2>
      <p>Valor do contador: {counter}</p>
    </>
  )
}

export default About
