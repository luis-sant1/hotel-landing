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
        <div className='flex w-full ' >
            <div className='w-9/12  m-auto '>
                <h1>Carrusel</h1>
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
    )
}