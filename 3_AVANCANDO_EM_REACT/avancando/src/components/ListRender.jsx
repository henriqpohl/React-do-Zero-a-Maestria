import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Henrique", "Joao", "Maria"])

  const [users, setUsers] = useState([
    { id: 0, name: "Henrique", age: 31 },
    { id: 1, name: "Joao", age: 31 },
    { id: 2, name: "Maria", age: 31 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })

  }

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
      <h2>Previous State</h2>
      <button onClick={deleteRandom}>Delete random User</button>
    </div>
  )
}

export default ListRender
