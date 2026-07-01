import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AppRouter from './router'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
