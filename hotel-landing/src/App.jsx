import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import NavBar from './components/NavBar'
import Formulario from './components/Form.jsx'
import ScrollToHashElement from './components/utils/ScrollToHashElement.js'
import { AuthProvider } from './components/context/AuthContext.jsx'

function App() {
  return (
    
        <BrowserRouter>                                                   
          <ScrollToHashElement />
          <NavBar />
          <Routes>
            <Route path='/*' element={<Landing />} />
            <Route path='/reservation-form' element={<Formulario/>} />
           
          </Routes>
        </BrowserRouter>
   
  )
}

export default App
