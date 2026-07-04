import type { ReactNode } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './MainLayout.module.css'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
