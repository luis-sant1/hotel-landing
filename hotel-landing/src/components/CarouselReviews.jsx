import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviews from './Reviews';

export default function CarouselRooms (){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <div className='w-full h-full'>
            <div className='flex w-full h-5/6 pt-10 pb-10' >
                <div className='bg-neutral-200 w-full'>
                <div className='w-9/12  m-auto pb-10'>
                    <h1 className='flex justify-center pt-8 pb-1 font-extralight text-5xl md:text-7xl md:pb-3 md:pt-10 lg:text-8xl lg:pb-6 lg:pt-12'>Testimonios</h1>
                    <Carousel
                        responsive={responsive}>
                            <Reviews/>
                            <Reviews/>
                            <Reviews/>
                            <Reviews/>
                            <Reviews/>
                    </Carousel>
                </div>
                </div>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>
        </div>
    )
}