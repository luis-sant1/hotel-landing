import CarouselReviews from './CarouselReviews'
import RoomsButtons from './RoomsButtons'
import { useParams } from 'react-router-dom'
import { oneRoom } from '../api/requests'
import { useEffect, useState } from 'react'
import { useAuth } from './context/AuthContext'
import RoomReviews from './RoomReviews'
import Footer from './Footer'
export default function RoomsViews() {
    const { isAuthenticated } = useAuth()
    function useForceUpdate() {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update state to force render
        // A function that increment 👆🏻 the previous state like here 
        // is better than directly setting `setValue(value + 1)`
    }
    const forceUpdate = useForceUpdate();
    const [room, setRoom] = useState({})
    useEffect(() => {
        const room = async () => {
            try {
                const res = await oneRoom(id)
                setRoom(res.data?.room)
            } catch (error) {
                const defaultRoom = {
                    title: "Dafault",
                    description: "Dafault description",
                    price: "123",
                    imagen: {
                        secure_url: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                    },
                    review: [{username: "default", review: "Default review"}],
                    promo: "",
                    modcon: "",
                    modcon1: "",
                    modcon2: "",
                    modcon3: "",
                };
                setRoom(defaultRoom);
                console.log(error)
            }
        }
        room();
    }, [])
    const { id } = useParams()


    return (
        <div className='w-full h-full dark:bg-gray-800  bg-white'>
            <div className="m-0 w-full h-full group  flex text-center">
                <img
                    className="h-80 w-full relative object-cover md:h-full lg:h-4/6 "

                    src={room?.imagen?.secure_url} alt="Imagen de la habitación" />
                <div className="absolute z-5 m-auto left-0 right-0  text-white flex self-end items-end w-full pb-10" >
                    <div className="flex justify-center w-1/2">
                        <h2 className="text-4xl font-extralight flex  lg:text-5xl">{room?.title}</h2>
                    </div>
                    <div className="flex justify-center w-1/2 pt-5">
                        <p className="font-extralight text-3xl lg:text-4xl">{room?.price}$</p>

                    </div>
                </div>
            </div>

            <div className='lg:flex lg:pt-7'>
                <div className="w-11/12 mr-auto ml-auto pt-7 border-b border-black lg:border-b-0 lg:w-8/12 lg:pt-1">

                    <p className="text-black font-light text-lg pb-3 md:pb-6 lg:pl-8 dark:text-white">{room?.description}</p>

                    <div className="hidden md:hidden lg:flex lg:w-full lg:mr-0 lg:ml-0 ">
                        <img src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" className="w-full h-96 pb-3 md:h-full lg:pb-8" />
                    </div>
                </div>
                <div className="text-black pt-3 w-11/12 mr-auto ml-auto border-y border-black md:pt-6 lg:pl-14 lg:w-3/12 lg:h-64 dark:text-white">
                    <h1 className="text-3xl font-light pb-5 lg:text-4xl">Comodidades</h1>
                    <ul className="list-disc pl-10 pb-3 md:pb-6">
                        <li className="font-light text-lg lg:text-xl">{room?.modcon}</li>
                        <li className="font-light text-lg lg:text-xl">{room?.modcon1}</li>
                        <li className="font-light text-lg lg:text-xl">{room?.modcon2}</li>
                        <li className="font-light text-lg lg:text-xl">{room?.modcon3}</li>
                    </ul>
                </div>
            </div>
            {/* <div className="w-11/12 mr-auto ml-auto pt-3 border-b border-black lg:hidden">
                <img src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" className="w-full h-96 pb-3 md:h-full lg:pb-8" />
            </div> */}

            <div className='hidden md:hidden lg:flex lg:border-b lg:border-black lg:w-[97%] lg:mr-auto lg:ml-auto'>

            </div>

            <div className='pt-5'>
                <div className='flex justify-center'>
                    <h1 className='text-black font-light text-5xl md:text-6xl md:pb-4 lg:text-7xl lg:pb-6 dark:text-white'>Reviews</h1>
                </div>

                <RoomReviews id={id} />
            </div>
            {
                isAuthenticated && <RoomsButtons id={id} />
            }

            <Footer />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}