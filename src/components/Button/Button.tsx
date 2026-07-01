import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ className, ...props }: ButtonProps) {
  return <button className={[styles.button, className].filter(Boolean).join(' ')} {...props} />
}

export default Button
