// React
import { useState, useEffect } from "react"

// 4 - CUstom Hook
import { useFecth } from "./hooks/useFecth"

// CSS
import "./App.css"

// API - DATA
const url = "http://localhost:3000/products/"

function App() {
  const [products, setProducts] = useState([])

  // 4 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFecth(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - Resgatando Dados
  // useEffect(() => {
  //   async function fetchData() {
      
  //     const res = await fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data)
  //     })

  //     // const res = await fetch(url)

  //     // const data = await res.json()

  //     // setProducts(data)
  //   }

  //   fetchData()
  // }, [])

  // 2 - Add Products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // 3 - Carregamento Dinâmico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct ])

    // 5 - Refatorando POST

    httpConfig(product, "POST")

    setName("")
    setPrice("")

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>

          <label>
            <span>Preço</span>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </label>

          {/* 7 - State de Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  )
}

export default App
