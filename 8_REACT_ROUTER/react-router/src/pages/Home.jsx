// REACT
import { Link } from 'react-router-dom'

// Custom Hook
import { useFetch } from '../hooks/useFetch'

// CSS
import './Home.css'


const Home = () => {
  // 3 - Carregamento de Dados
  const url = "http://localhost:3000/products"
  const { data: items, loading, error } = useFetch(url)
  
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4 - Rotas Dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home
