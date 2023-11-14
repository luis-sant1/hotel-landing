import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Playas from './Playas';
export default function Carrusel() {
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
    return (
        <div className='flex w-full' >
            <div className='w-11/12 overflow-hidden m-auto'>
                <h1>Carrusel</h1>
                <Carousel
                    responsive={responsive}>
                    <Playas/>
                    <Playas/>
                    <Playas/>
                    <Playas/>
                    <Playas/>
                </Carousel>
            </div>
        </div>
    )
}
