// React
// import { useContext } from "react"

// Context
// import { CounterContext } from "../context/CounterContext"

// Custom Hook
import { useCounterContext } from "../hooks/useCounterContext"

//CSS
import "./Contact.css"

function Contact() {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()
  return (
    <>
      <h2>Contact</h2>
      <p>Valor do contador: {counter}</p>
    </>
  )
}

export default Contact
