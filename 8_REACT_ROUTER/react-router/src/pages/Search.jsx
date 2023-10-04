// REACT
import { useSearchParams, Link } from "react-router-dom"

// Custom Hooks
import { useFetch } from "../hooks/useFetch"

// CSS
import "./Search.css"

const Search = () => {
  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
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

export default Search
