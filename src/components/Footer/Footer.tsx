import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Diseño y desarrollo hecho por la novia,{' '}
        <a href="https://www.linkedin.com/in/olatzglez/" target="_blank" rel="noopener noreferrer">
          Olatz
        </a>
      </p>
    </footer>
  )
}

export default Footer