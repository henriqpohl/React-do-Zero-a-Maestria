// React
import { useContext } from "react"

// Context
import { CounterContext } from "../context/CounterContext"

function ChangeCounter() {
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter +1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter
