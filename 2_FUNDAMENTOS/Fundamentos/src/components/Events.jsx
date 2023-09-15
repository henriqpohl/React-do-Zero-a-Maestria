const Events = () => {

  const handleMyEvent = () => {
    console.log("Ativou o evento")
  }

  const renderSomething = (x) => {
    if (x) {
      return <h2>Renderizando isso!</h2>
    }else{
      return <h2>Também posso renderizar isso!</h2>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events