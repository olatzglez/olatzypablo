import { useEffect, useState, type ReactNode, type SubmitEvent } from 'react'
import { EVENT_DATE_HASH } from '../../data/eventDate'
import Button from '../Button'
import styles from './DateGate.module.css'

const ACCESS_KEY = 'access-granted'
const ATTEMPTS_KEY = 'access-attempts'
const LOCKED_UNTIL_KEY = 'access-locked-until'

const MAX_ATTEMPTS = 3
const LOCK_DURATION_MS = 5 * 60_000

async function sha256Hex(text: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function readLockedUntil() {
  const stored = sessionStorage.getItem(LOCKED_UNTIL_KEY)
  return stored ? Number(stored) : null
}

type DateGateProps = {
  children: ReactNode
}

function DateGate({ children }: DateGateProps) {
  const [granted, setGranted] = useState(() => sessionStorage.getItem(ACCESS_KEY) === 'true')
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [lockedUntil, setLockedUntil] = useState<number | null>(readLockedUntil)
  const [now, setNow] = useState(() => Date.now())

  const isLocked = lockedUntil !== null && now < lockedUntil

  useEffect(() => {
    if (lockedUntil === null) return

    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [lockedUntil])

  useEffect(() => {
    if (lockedUntil !== null && now >= lockedUntil) {
      setLockedUntil(null)
      sessionStorage.removeItem(LOCKED_UNTIL_KEY)
      sessionStorage.removeItem(ATTEMPTS_KEY)
    }
  }, [lockedUntil, now])

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    if (isLocked) return

    const hash = await sha256Hex(value)

    if (hash === EVENT_DATE_HASH) {
      sessionStorage.setItem(ACCESS_KEY, 'true')
      sessionStorage.removeItem(ATTEMPTS_KEY)
      sessionStorage.removeItem(LOCKED_UNTIL_KEY)
      setGranted(true)
      setError(false)
      return
    }

    const attempts = Number(sessionStorage.getItem(ATTEMPTS_KEY) ?? '0') + 1
    sessionStorage.setItem(ATTEMPTS_KEY, String(attempts))
    setError(true)

    if (attempts >= MAX_ATTEMPTS) {
      const until = Date.now() + LOCK_DURATION_MS
      sessionStorage.setItem(LOCKED_UNTIL_KEY, String(until))
      setLockedUntil(until)
      setNow(Date.now())
    }
  }

  if (granted) {
    return children
  }

  const secondsLeft = isLocked ? Math.ceil((lockedUntil - now) / 1000) : 0
  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const timeLeft = minutes > 0 ? `${minutes}:${String(seconds).padStart(2, '0')} minutos` : `${seconds} segundos`

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1>Olatz & Pablo</h1>
        <p>Introduce la fecha de la boda para entrar</p>
        <input
          className={styles.input}
          type="date"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={isLocked}
          aria-label="Fecha de la boda"
        />
        {error && !isLocked && (
          <p className={styles.error}>Esa fecha no es correcta, inténtalo de nuevo.</p>
        )}
        {isLocked && (
          <p className={styles.error}>
            Demasiados intentos. Vuelve a intentarlo en {timeLeft}.
          </p>
        )}
        <Button type="submit" disabled={isLocked}>
          Entrar
        </Button>
      </form>
    </div>
  )
}

export default DateGate