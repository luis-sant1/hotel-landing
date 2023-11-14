import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import NavBar from './components/NavBar'
import Formulario from './components/Form.jsx'
import ScrollToHashElement from './components/utils/ScrollToHashElement.js'
import { AuthProvider } from './components/context/AuthContext.jsx'
import CarruselPlayas from './components/Carousel.jsx'
import CarouselRooms from './components/CarouselRooms.jsx'
import CarouselReviews from './components/CarouselReviews.jsx'
function App() {
  return (
    
        <BrowserRouter>                                                   
          <ScrollToHashElement />
          <NavBar />
          <Routes>
            <Route path='/*' element={<Landing />} />
            <Route path='/reservation-form' element={<Formulario />} />
            <Route path='/carrusel' element={<CarruselPlayas />} />
            <Route path='/carruselRooms' element={<CarouselRooms />} />
            <Route path='/CarouselReviews' element={<CarouselReviews />} />
          </Routes>
        </BrowserRouter>
   
  )
}

export default App
