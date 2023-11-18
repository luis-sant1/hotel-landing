import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import NavBar from './components/NavBar'
import Formulario from './components/Form.jsx'
import ScrollToHashElement from './components/utils/ScrollToHashElement.js'
import { AuthProvider } from './components/context/AuthContext.jsx'
import EditPlaForm from './components/EditPlaForm.jsx'
import CreatePlaForm from './components/CreatePlaForm.jsx'
import CreateReview from './components/CreateReview.jsx'
import EditRooms from './components/EditRooms.jsx'

function App() {
  return (
    
        <BrowserRouter>                                                   
          <ScrollToHashElement />
          <NavBar />
          <Routes>
            <Route path='/*' element={<Landing />} />
            <Route path='/reservation-form' element={<Formulario/>} />
            <Route path='/edit-pla-form' element={<EditPlaForm/>} />
            <Route path='/create-pla-form' element={<CreatePlaForm/>} />
            <Route path='/create-review' element={<CreateReview/>} />
            <Route path='/edit-rooms' element={<EditRooms/>} />
            
           
          </Routes>
        </BrowserRouter>
   
  )
}

export default App
