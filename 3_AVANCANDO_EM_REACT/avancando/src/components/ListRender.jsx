import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Henrique", "Joao", "Maria"])

  const [users] = useState([
    { id: 1, name: "Henrique", age: 31 },
    { id: 2, name: "Joao", age: 31 },
    { id: 2, name: "Maria", age: 31 },
  ])

  return (
    <div>
      <h2>Renderização de listas</h2>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2>Renderização de listas com a propiedade 'key'</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
