import { useState, type FormEvent, type ReactNode } from 'react'
import { EVENT_DATE } from '../../data/eventDate'
import Button from '../Button'
import styles from './DateGate.module.css'

const STORAGE_KEY = 'access-granted'

function isCorrectDate(value: string) {
  const match = value.match(/(\d{1,2}).*?(\d{1,2}).*?(\d{4})/)
  if (!match) return false

  const [, day, month, year] = match
  return (
    Number(day) === EVENT_DATE.day &&
    Number(month) === EVENT_DATE.month &&
    Number(year) === EVENT_DATE.year
  )
}

type DateGateProps = {
  children: ReactNode
}

function DateGate({ children }: DateGateProps) {
  const [granted, setGranted] = useState(() => sessionStorage.getItem(STORAGE_KEY) === 'true')
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (isCorrectDate(value)) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setGranted(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (granted) {
    return children
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1>Olatz & Pablo</h1>
        <p>Introduce la fecha de la boda para entrar</p>
        <input
          className={styles.input}
          type="text"
          inputMode="numeric"
          placeholder="DD / MM / AAAA"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-label="Fecha de la boda"
        />
        {error && <p className={styles.error}>Esa fecha no es correcta, inténtalo de nuevo.</p>}
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  )
}

export default DateGate
