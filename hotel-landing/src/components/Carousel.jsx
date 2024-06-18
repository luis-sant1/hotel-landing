import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Playas from './Playas';
import CurrentClimate from './CurrentClimate';
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
        const data = [
        {
            "name": "Parque Nacional Morrocoy",
            "decription": "El Parque nacional Morrocoy es un parque nacional ubicado en el litoral más oriental del estado Falcón.",
            "link": "https://es.wikipedia.org/wiki/Parque_nacional_Morrocoy",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cocotero_en_Cayo_Sombrero.jpg/800px-Cocotero_en_Cayo_Sombrero.jpg"
        },
        {
            "name": "Cayo Los Pescadores",
            "decription": "El Cayo Pescadores​ es una isla pequeña perteneciente al Estado Falcón​ en la costa del Mar Caribe de Venezuela.",
            "link": "https://es.wikipedia.org/wiki/Cayo_Los_Pescadores",
            "img": "data:image/jpeg;base64,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"
        },
        {
            "name": "Los Juanes",
            "decription": "Es también conocido como la “piscina natural”, esto se debe a que no posee playas de arenas.",
            "link": "https://www.venezuelatuya.com/morrocoy/losjuanes.htm",
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/07/6b/da/a7/parque-nacional-morrocoy.jpg"
        },
        {
            "name": "Cayo Sombrero",
            "decription": "Cayo Sombrero1​ es el nombre de una isla del mar Caribe que pertenece al parque nacional Morrocoy.",
            "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
            "img": "https://elaragueno.com.ve/wp-content/uploads/2023/08/Cayo-Sombrero-uno-de-los-mejores-destinos-playeros.jpg"
        },
        {
            "name": "Cayo Playa Azul",
            "decription": "Los Cayos de Falcón son una belleza natural de Venezuela, azul y más azul.",
            "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
            "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ad/34/82/cayo-playa-azul.jpg?w=1200&h=-1&s=1"
        }
    ]
    return (


        <div className='w-fulloverflow-hidden m-auto'>

            <Carousel
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        return (
                            <Playas key={i} name={x.name} description={x.decription} link={x.link} img={x.img} />
                        )
                    })
                }
                <CurrentClimate />
            </Carousel>
        </div>


    )
}
