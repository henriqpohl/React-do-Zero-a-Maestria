const Challenge = () => {

  const a = 10
  const b = 20

  const handleSomar = () => {
    console.log(a + b)
    alert(a + b)
  }

  return (
    <div className="challenge-2">
      <h2>Desafio 2:</h2>

      <p>Número 1: {a}</p>
      <p>Número 2: {b}</p>

      <button onClick={handleSomar}>Somar</button>
    </div>
  )
}

export default Challenge