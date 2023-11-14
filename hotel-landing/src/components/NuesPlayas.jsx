import Carousel from "./Carousel"
export default function NuesPlayas() {
    return(
        <div className='w-full h-full pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20'>
        <div className='flex w-full h-5/6 bg-[rgba(230,230,230,1)] pt-10 pb-5 lg:pb-10' >
            <div className='w-11/12 overflow-hidden m-auto'>
                <h1 className='font-extralight text-3xl md:text-5xl md:pl-8 md:pb-10 lg:text-7xl lg:pl-16'>Descubre más sobre nuestras playas</h1>
                <Carousel />
            </div>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
        </style>
    </div>
    )
}