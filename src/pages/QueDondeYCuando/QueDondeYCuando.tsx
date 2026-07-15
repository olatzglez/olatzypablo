import styles from './QueDondeYCuando.module.css'

const address = 'Barrio Zubiete, 53, BAJO, 48194 Zubiete, Biscay'
const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

function QueDondeYCuando() {
  return (
    <section className={styles.page}>
      <h1>Qué, cuándo y dónde</h1>

      <h2>Qué</h2>
      <div className={styles.card}>
        <p>¡Nos casamos!</p>
      </div>

      <h2>Cuándo</h2>
      <div className={styles.card}>
        <p>25 de julio de 2026</p>
      </div>

      <h2>Dónde</h2>
      <div className={styles.card}>
        <p>Finca Isasi</p>
        <p>{address}</p>
        <iframe
          className={styles.map}
          src={mapsEmbedUrl}
          title="Ubicación de Finca Isasi en Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Cómo llegar
        </a>
      </div>
    </section>
  )
}

export default QueDondeYCuando
