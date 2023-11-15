
import CarruselHome from "./CarruselHome/CarruselHome"
import { useAuth } from "./context/AuthContext"
import { useNavigate } from "react-router-dom"
export default function Home() {
    const {setShow, show} = useAuth()
    const navigate = useNavigate();
    const toReservation = () => {
        navigate('/reservation-form')
        setShow(false)
    }
    return (
        <div className="bg-[rgba(230,230,230,1)] md:flex">
            <div className="md:flex lg:w-11/12">
                <div className='w-11/12 mr-auto ml-auto md:pl-8 md:w-full lg:w-11/12 lg:pl-10'>
                    <div className='pt-10 pb-10 w-full md:pt-20 md:pb-20'>
                        <h1 className='font-light text-5xl md:text-7xl lg:text-9xl'>Esto es un titulo y es increible</h1>
                    </div>
                    <div className='w-10/12 pb-20 md:pb-28 lg:pb-52'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis facilis veniam amet iste nesciunt ipsam soluta, ratione autem delectus saepe?</p>
                    </div>
                    <div className="md:pb-5">
                        <button
                        onClick={toReservation}
                        className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl lg:w-44 lg:h-14 pb-1'>¡Reserva ya!</button>
                    </div>
                </div>
            </div>

            <CarruselHome />

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>

    )
}