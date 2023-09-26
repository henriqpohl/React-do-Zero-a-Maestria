import { useState } from "react"
import "./myForm.css"

function MyForm({ user }) {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "")

  const handleName = (e) => {
    setName(e.target.value)
  }

  //console.log(name)
  //console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, bio, role)
    console.log("Enviando formulario...")

    // 7 - Limpar formulário
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <div>
      {/* 1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          {/* Simplificação de manipulação de State */}
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - TextArea */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="Usuario">Usuário</option>
            <option value="Editor">Editor</option>
            <option value="Administrador">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
