import { useState, useRef, useEffect } from 'react';

// Data
import data from './Data.json';

const Playas = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='w-full h-full'>
        <div className="carousel my-12 mx-auto w-full h-5/6 bg-neutral-200 pt-10 pb-10">
            <h1 className="text-3xl leading-8 font-light mb-12 pl-2 md:text-5xl md:pl-10 lg:text-7xl lg:pl-28">
                Decubre más sobre nuestras playas 
            </h1>
        <div className="relative overflow-hidden lg:w-9/12 mr-auto ml-auto">
            <div className="flex justify-between absolute top left w-full h-full">
                <button
                    onClick={movePrev}
                    className="bg-yellow-800 text-white w-10 h-full text-center opacity-100 cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled('prev')}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-20 -ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                    <span className="sr-only">Prev</span>
                </button>
                <button
                    onClick={moveNext}
                    className="bg-yellow-800 text-white w-10 h-full text-center oopacity-100 cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                    disabled={isDisabled('next')}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-20 -ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
                </div>
            <div className='pl-10 pr-10'>
                <div
                ref={carousel}
                className="carousel-container pr-10 relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 md:pl-20 md:pr-10"
                >
                {data.resources.map((resource, index) => {
                    return (
                    <div
                        key={index}
                        className="carousel-item w-80 h-80 text-center relative md:w-96 md:h-96 snap-start"
                    >
                        <a
                        href={resource.link}
                        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                        style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                        >
                        <img
                            src={resource.imageUrl || ''}
                            alt={resource.title}
                            className="w-full aspect-square hidden"
                        />
                        </a>
                        <div>
                            
                        </div>
                        <a
                        href={resource.link}
                        className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-100  z-10"
                        >
                        <h3 className="font-light text-white py-6 px-3 mx-auto text-xl align-middle pt-32 md:pt-44 lg:text-transparent lg:hover:text-white lg:transition-all">
                            {resource.title}
                        </h3>
                        </a>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
        </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
    </div>
  );
};

export default Playas;