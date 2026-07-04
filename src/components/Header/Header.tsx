import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
  { to: '/que-donde-y-cuando', label: 'Qué, dónde y cuándo' },
  { to: '/como-voy', label: 'Cómo voy' },
  { to: '/la-pareja', label: 'La pareja' },
  { to: '/protocolo', label: 'Protocolo/Dresscode' },
  { to: '/proveedores', label: 'Proveedores' },
  { to: '/nuestra-gente-talentosa', label: 'Nuestra gente talentosa' },
  { to: '/contacto', label: 'Contacto' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand} onClick={closeMenu}>
        O&P
      </NavLink>

      <button
        type="button"
        className={styles.toggle}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
