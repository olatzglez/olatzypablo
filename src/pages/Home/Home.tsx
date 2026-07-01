import Button from '../../components/Button'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1>Olatz & Pablo</h1>
      <p>Nos casamos. Muy pronto podréis confirmar aquí vuestra asistencia.</p>
      <Button type="button">Confirmar asistencia</Button>
    </section>
  )
}

export default Home
