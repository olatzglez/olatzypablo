import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <h1>404</h1>
      <p>Esta página no existe.</p>
    </section>
  )
}

export default NotFound
