import type { ReactNode } from 'react'
import styles from './MainLayout.module.css'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default MainLayout
