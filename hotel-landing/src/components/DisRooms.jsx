import CarouselRooms from "./CarouselRooms"
import CreateButton from "./CreateButton"
import { useAuth } from "./context/AuthContext"
export default function DisRooms() {
    const {isAuthenticated} = useAuth()
    return(
        <div className="bg-[rgba(230,230,230,1)] dark:bg-gray-900 dark:text-white text-black">
            <div className='flex w-full bg-[rgba(230,230,230,1)] dark:bg-gray-900' >
                <div className='w-9/12  m-auto pt-10 pb-10 md:pt-16' id= "rooms">
                    <h1 className='font-extralight pb-10 text-4xl md:text-6xl lg:text-7xl'>Habitaciones disponibles</h1>
                    <CarouselRooms />
                </div>
                
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>
        {
            isAuthenticated && <CreateButton/>
        }
        </div>
    )
}