const TemplateExpressions = () => {
  
  const name = "Henrique"

  const data = {
    age: 31,
    job: "Front End Engineer",
  }

  return (
    <div>
      <p>Olá {name}, tudo bem?</p>
      <p>Você atua como: {data.job}</p>
    </div>
  )
}

export default TemplateExpressions