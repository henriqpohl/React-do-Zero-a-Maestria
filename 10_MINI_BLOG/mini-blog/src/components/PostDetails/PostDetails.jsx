// Hooks
import { Link } from "react-router-dom"

// CSS
import styles from "../PostDetails/PostDetails.module.css"

const PostDetails = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>criado por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  )
}

export default PostDetails
