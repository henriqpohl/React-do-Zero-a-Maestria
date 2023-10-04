// REACT
import { Link, useParams } from "react-router-dom"

// Custom Hook
import { useFetch } from "../hooks/useFetch"

const Product = () => {
  // 4 - Rotas Dinâmica

  const { id } = useParams()

  const url = "http://localhost:3000/products/" + id
  // 5 - Carregamento de dados individuais
  const { data: product, loading, error } = useFetch(url)

  console.log(product)

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>
          {/* 6 - Nested Routes */}
          <Link to={`/products/${product.id}/info`}>Mais infos</Link>
        </div>
      )}
    </>
  )
}

export default Product
