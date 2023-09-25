import React from "react"
import UsersDetails from "./UsersDetails"

const users = [
  {
    id: 1,
    name: "Henrique",
    job: "Front End Engineer",
    sex: "Masculino",
    age: 32,
  },
  {
    id: 2,
    name: "Matheus",
    job: "Full Stack Engineer",
    sex: "Feminino",
    age: 31,
  },
  {
    id: 3,
    name: "Eliana",
    job: "Studant",
    sex: "Feminino",
    age: 17,
  },
  {
    id: 4,
    name: "Maria",
    job: "Retired",
    sex: "Feminino",
    age: 67,
  }
]

const Challange = () => {
  return (
    <div>
      <h2>Desafio 4:</h2>

      {users.map((user) => (
        <UsersDetails
          key={user.id}
          name={user.name}
          job={user.job}
          sex={user.sex}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default Challange
