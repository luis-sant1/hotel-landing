import CarouselReviews from './CarouselReviews'
export default function Testimonios() {
    return(
        <div className='w-full h-full'>
            <div className='flex w-full h-5/6 pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20' >
                <div className='bg-[rgba(230,230,230,1)] w-full'>
                <div className='w-9/12  m-auto pb-10'>
                    <h1 className='flex justify-center pt-8 pb-1 font-extralight text-5xl md:text-7xl md:pb-3 md:pt-10 lg:text-8xl lg:pb-6 lg:pt-12'>Testimonios</h1>
                    <CarouselReviews />
                </div>
                </div>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>
        </div>
    )
}