// React Hooks
import { useState } from "react"

// Hooks
import { useNavigate, Link, useFetcher } from "react-router-dom"

// Custom Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

// CSS Module
import styles from "../Home/Home.module.css"

// Components
import PostDetails from "../../components/PostDetails/PostDetails"

function Home() {

  const [query, setQuery] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }

  }
  return (
    <div className={styles.home}>
      
      <h1>Veja os nossos posts mais recentes...</h1>
      
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        <h1>Posts...</h1>
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} /> )}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="posts/create" className="btn">Criar primeiro post</Link>
          </div>
        )}
      </div>


    </div>
  )
}

export default Home
