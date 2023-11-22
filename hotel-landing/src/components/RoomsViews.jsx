import CarouselReviews from './CarouselReviews'
import RoomsButtons from './RoomsButtons'
import { useParams } from 'react-router-dom'
import { oneRoom } from '../api/requests'
import { useEffect, useState } from 'react'
export default function RoomsViews() {
    const [room, setRoom] = useState({})
    useEffect(() => {
        const room = async()=> {
            try {
                const res = await oneRoom(id)
                setRoom(res.data?.room)
            } catch (error) {
                console.log(error)
            }
        }
        room();
    }, [])
    const {id} = useParams()
    console.log(room)
    return(
        <div className='w-full h-full'>
            <div className="m-0 w-full h-full group  flex text-center">
                <img 
                className="h-80 w-full relative object-cover md:h-full lg:h-4/6 "
                src={room?.imagen?.secure_url} alt="Imagen de la habitación" />
                <div className="absolute z-10 m-auto left-0 right-0 top-[29%] text-white flex w-full md:top-[33%] lg:top-[95%]" >
                    <div className="flex justify-center w-1/2">
                        <h2 className="text-6xl font-extralight flex lg:text-8xl">{room?.title}</h2>
                    </div>
                    <div className="flex justify-center w-1/2 pt-5">
                        <p className="font-extralight text-4xl lg:text-6xl">{room?.price}$</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:pt-7'>
                <div className="w-11/12 mr-auto ml-auto pt-7 border-b border-black lg:border-b-0 lg:w-8/12 lg:pt-1">
                    <p className="font-light text-lg pb-3 md:pb-6 lg:pl-8">{room?.description}</p>
                    <div className="hidden md:hidden lg:flex lg:w-full lg:mr-0 lg:ml-0 ">
                        <img src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" className="w-full h-96 pb-3 md:h-full lg:pb-8" />
                    </div>
                </div>
                <div className="pt-3 w-11/12 mr-auto ml-auto border-y border-black md:pt-6 lg:pl-14 lg:w-3/12 lg:h-64">
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
                    <h1 className='font-light text-5xl md:text-6xl md:pb-4 lg:text-7xl lg:pb-6'>Reviews</h1>
                </div>

                <CarouselReviews/>
            </div>

            <RoomsButtons id = {id}/>

        <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}