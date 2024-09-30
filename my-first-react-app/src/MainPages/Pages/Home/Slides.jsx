import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function HeroSlides({ slides }){
    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = slides?.length || 0;

    useEffect(() => {
      // Logic to handle slideIndex updates automatically
    }, [slideIndex]);
  
    // Functions to change slides
    function plusSlides(n) {
      setSlideIndex((prev) => {
        let newIndex = prev + n;
        if (newIndex > totalSlides) return 1;
        if (newIndex < 1) return totalSlides;
        return newIndex;
      });
    }
    return(
        <>
        {slides.map(({ img, text, index }) => (
            <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'block' : 'hidden'} fade bg-fuchsia-500`}>
              <div className="flex justify-between h-max border-4 border-gray-950 px-10 bg-contain bg-center max-sm:px-0" style={{ backgroundImage: `url(${img})` }}>
                <div className="text-standard bg-white p-4 dark:bg-black bg-opacity-80 w-max h-max mx-autotext-black dark:text-white ">
                    {text}
                </div>
              </div>
            </div>
        ))}
          <a className="prev cursor-pointer border-4 border-black flex items-center justify-center h-[100%] p-3 absolute top-1/2 left-[-40px] bg-slate-400 text-white font-bold transition duration-600 ease-in-out rounded-r-[3px] select-none hover:bg-black/80"
              style={{ transform: 'translateY(-50%)' }} // Center vertically
              onClick={() => plusSlides(-1)}
          >
              <span className="text-large">&#10094;</span>
          </a>
          <a className="next cursor-pointer border-4 border-black flex items-center justify-center h-[100%] p-3 absolute top-1/2 right-[-40px] bg-slate-400 text-white font-bold transition duration-600 ease-in-out rounded-l-[3px] select-none hover:bg-black/80"
              style={{ transform: 'translateY(-50%)' }} // Center vertically
              onClick={() => plusSlides(1)}
          >
              <span className="text-large">&#10095;</span>
          </a>
        </>
    )

}
HeroSlides.propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,  // `img` can be any type if it's an imported image file
        text: PropTypes.node.isRequired,
        index: PropTypes.number.isRequired,
      })
    ).isRequired,
};