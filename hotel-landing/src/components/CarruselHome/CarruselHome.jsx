import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className='pt-10 md:w-10/12 md:pt-0 grid justify-self-end lg:pt-0 lg:w-8/12 '
      >
        
        <Slider>
          <Slide index={0} className='text-red-500'><img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/297569800.jpg?k=ba6dd9f2f758c3ce16795a5f2c084d15e72923ccb58fa46a3dc87e55ed305215&o=" alt="Imagen del Hotel" className='w-full h-96 md:h-full lg:full'/></Slide>
          <Slide index={1}><img src="https://previews.123rf.com/images/fokkebok/fokkebok2307/fokkebok230700559/211690733-dos-personas-nadan-en-la-piscina-del-hotel-vista-desde-arriba-un-par-de-hombres-y-mujeres-en-una.jpg" alt="Imagen dela piscina" className='w-full h-96 md:h-full lg:full'/></Slide>
          <Slide index={2}><img src="https://img.freepik.com/foto-gratis/vista-vertical-largo-muelle-madera-cerca-oceano-cielo-color-pastel_181624-6302.jpg" alt="Imagen del Muelle" className='w-full h-96 md:h-full lg:full'/></Slide>
        </Slider>
        
      </CarouselProvider>
    );
  }
}