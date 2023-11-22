import CarouselReviews from './CarouselReviews'
import RoomsButtons from './RoomsButtons'
export default function RoomsViews() {
    return(
        <div className='w-full h-full dark:bg-gray-800  bg-white'>
            <div className="m-0 w-full h-full group  flex text-center">
                <img 
                className="h-80 w-full relative object-cover md:h-full lg:h-4/6 "
                src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" />
                <div className="absolute z-5 m-auto left-0 right-0  text-white flex self-end items-end w-full pb-10" >
                    <div className="flex justify-center w-1/2">
                        <h2 className="text-4xl font-extralight flex  lg:text-5xl">Titulo</h2>
                    </div>
                    <div className="flex justify-center w-1/2 pt-5">
                        <p className="font-extralight text-3xl lg:text-4xl">Precio$</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:pt-7'>
                <div className="w-11/12 mr-auto ml-auto pt-7 border-b border-black lg:border-b-0 lg:w-8/12 lg:pt-1">
                    <p className="text-black font-light text-lg pb-3 md:pb-6 lg:pl-8 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eum voluptates. Sed omnis voluptatem dignissimos iusto ullam pariatur cupiditate, corporis nesciunt accusantium fuga! Corrupti cumque, optio eius, quas beatae sed, consectetur quod officia temporibus voluptate fugiat modi blanditiis ad eligendi labore assumenda ratione? Quisquam incidunt ipsam et modi accusantium tempore.</p>
                    <div className="hidden md:hidden lg:flex lg:w-full lg:mr-0 lg:ml-0 ">
                        <img src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" className="w-full h-96 pb-3 md:h-full lg:pb-8" />
                    </div>
                </div>
                <div className="text-black pt-3 w-11/12 mr-auto ml-auto border-y border-black md:pt-6 lg:pl-14 lg:w-3/12 lg:h-64 dark:text-white">
                        <h1 className="text-3xl font-light pb-5 lg:text-4xl">Comodidades</h1>
                        <ul className="list-disc pl-10 pb-3 md:pb-6">
                            <li className="font-light text-lg lg:text-xl">Comodidad numero 1</li>
                            <li className="font-light text-lg lg:text-xl">Comodidad numero 2</li>
                            <li className="font-light text-lg lg:text-xl">Comodidad numero 3</li>
                            <li className="font-light text-lg lg:text-xl">Comodidad numero 4</li>
                        </ul>
                    </div>
            </div>
            <div className="w-11/12 mr-auto ml-auto pt-3 border-b border-black lg:hidden">
                <img src="https://www.momalia.com/wp-content/uploads/2019/09/diseno-habitaciones-hotel2.jpg" alt="Imagen de la habitación" className="w-full h-96 pb-3 md:h-full lg:pb-8" />
            </div>

            <div className='hidden md:hidden lg:flex lg:border-b lg:border-black lg:w-[97%] lg:mr-auto lg:ml-auto'>
                
            </div>

            <div className='pt-5'>
                <div className='flex justify-center'>
                    <h1 className='text-black font-light text-5xl md:text-6xl md:pb-4 lg:text-7xl lg:pb-6 dark:text-white'>Reviews</h1>
                </div>

                <CarouselReviews/>
            </div>

            <RoomsButtons/>

        <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}