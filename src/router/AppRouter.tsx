import { Route, Routes } from 'react-router-dom'
import ComoVoy from '../pages/ComoVoy'
import Contacto from '../pages/Contacto'
import GenteTalentosa from '../pages/GenteTalentosa'
import Home from '../pages/Home'
import LaPareja from '../pages/LaPareja'
import NotFound from '../pages/NotFound'
import Protocolo from '../pages/Protocolo'
import Proveedores from '../pages/Proveedores'
import QueDondeYCuando from '../pages/QueDondeYCuando'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/que-donde-y-cuando" element={<QueDondeYCuando />} />
      <Route path="/como-voy" element={<ComoVoy />} />
      <Route path="/la-pareja" element={<LaPareja />} />
      <Route path="/protocolo" element={<Protocolo />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/nuestra-gente-talentosa" element={<GenteTalentosa />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
