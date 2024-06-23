import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import NavBar from './components/NavBar'
import Formulario from './components/Form.jsx'
import Login from './components/Login.jsx'
import ScrollToHashElement from './components/utils/ScrollToHashElement.js'
import EditRooms from './components/EditRooms.jsx'
import RoomsViews from './components/RoomsViews.jsx'
import CreateRooms from './components/CreateRooms.jsx'
import ProtectedRoutes from './components/context/ProtectedRoutes.jsx'
import RoomReviews from './components/RoomReviews.jsx'

function App() {
  return (

    <BrowserRouter>
      <ScrollToHashElement />
      <NavBar />
      <Routes>
        <Route path='/*' element={<Landing />} />
        <Route path='/reservation-form' element={<Formulario />} />
        <Route path='/rooms-views/:id' element={<RoomsViews />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rReviews' element={<RoomReviews/>} />
        <Route path='/create-room' element={<CreateRooms />} />  

        <Route element={<ProtectedRoutes />}>
          <Route path='/edit-rooms/:id' element={<EditRooms />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
