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
        <div className='w-full h-full pt-10 pb-10'>
            <div className='flex w-full h-5/6 bg-neutral-200 pt-10' >
                <div className='w-11/12 overflow-hidden m-auto'>
                    <h1 className='font-light text-3xl md:text-5xl md:pl-8 md:pb-10 lg:text-7xl lg:pl-16'>Descubre más sobre nuestras playas</h1>
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
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}
