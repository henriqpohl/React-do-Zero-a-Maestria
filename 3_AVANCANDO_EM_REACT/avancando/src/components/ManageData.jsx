import { useState } from "react"

const ManageData = () => {
  
  let someData = 10

  console.log(someData)

  const [number, setNumber] = useState(20);

  console.log(number)

  return (
    <div>
      <h2>useState na prática</h2>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar variável</button>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber (30)}>Mudar variável</button>
      </div>
    </div>
  )
}

export default ManageData
