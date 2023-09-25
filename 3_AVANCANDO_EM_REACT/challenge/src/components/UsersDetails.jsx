const UsersDetails = ({id, name, job, sex, age}) => {
  
  return (
    <div>
      <ul>
        <h2>{name}</h2>
        <li>
          <b>Job:</b> {job}
        </li>
        <li>
          <b>Sexo:</b> {sex}
        </li>
        <li>
          <b>Idade:</b> {age}
        </li>
        <li>
          <b>Poderá obter a habilitação?:</b> {age >= 18 ? (<span className="green">Sim</span>) : (<span className="red">Não</span>)}
        </li>
      </ul>
    </div>
  )
}

export default UsersDetails