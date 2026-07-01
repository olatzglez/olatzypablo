import { BrowserRouter } from 'react-router-dom'
import DateGate from './components/DateGate'
import MainLayout from './layouts/MainLayout'
import AppRouter from './router'

function App() {
  return (
    <DateGate>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </DateGate>
  )
}

export default App
