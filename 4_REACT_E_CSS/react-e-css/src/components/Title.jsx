import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
      <h2 className={styles.my_title}>Title</h2>
      <h2 className="my_title">Testando</h2>
    </div>
  )
}

export default Title