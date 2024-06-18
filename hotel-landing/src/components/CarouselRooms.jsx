import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rooms from './Rooms';
import { useAuth } from './context/AuthContext';
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
    const {rooms} = useAuth()
    console.log(rooms)
    return(
        
            <div className='w-full  m-auto pt-10 pb-10 md:pt-16'>
                
                <Carousel
                    responsive={responsive}>
                        {
                            rooms?.map((x, i) => {
                                return ( 
                                    <Rooms key={i} type={x.title} promo={x.promo} img={x.imagen.secure_url} id= {x._id}/>
                                )
                            })
                        }
                        
                        
                </Carousel>
            </div>

            
    )
}