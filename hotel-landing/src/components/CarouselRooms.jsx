import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rooms from './Rooms';
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
        <div className='flex w-full bg-neutral-200' >
            <div className='w-9/12  m-auto pt-10 pb-10 md:pt-16'>
                <h1 className='font-extralight pb-10 text-4xl md:text-6xl lg:text-7xl'>Habitaciones disponibles</h1>
                <Carousel
                    responsive={responsive}>
                        <Rooms/>
                        <Rooms/>
                        <Rooms/>
                        <Rooms/>
                        <Rooms/>
                        <Rooms/>
                        <Rooms/>
                </Carousel>
            </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}