
// Hooks
import { Link } from "react-router-dom"

// Custom Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

// CSS
import styles from "../Search/Search.module.css"

// Components
import PostDetails from "../../components/PostDetails/PostDetails"

const Search = () => {

  const query = useQuery()
  
  const search = query.get("q")

  const { documents: posts } = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <Link to="/" className="btn btn-dark">Voltar</Link>
          </div>
        )}
        {posts && posts.map((post) =>(
          <PostDetails key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Search