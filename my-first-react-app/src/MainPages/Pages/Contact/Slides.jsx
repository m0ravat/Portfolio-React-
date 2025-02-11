import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function ContactSlides({ slides }){
    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = slides.length;

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
{slides.map(({ img, form, index }) => (
  <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'block' : 'hidden'} fade`}>
    <div className="flex justify-center items-center w-full min-h-[500px] p-4 bg-contain bg-center border-4 border-black dark:border-white"
        style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full max-w-4xl bg-slate-100 dark:bg-black dark:text-white text-center">
        {form}
      </div>
    </div>
  </div>
  ))}

          <a className="prev cursor-pointer border-4 border-black flex items-center justify-center h-[100%] p-2 absolute top-1/2 left-[-30px] bg-slate-400 text-white font-bold transition duration-600 ease-in-out rounded-r-[3px] select-none hover:bg-black/80"
              style={{ transform: 'translateY(-50%)' }} // Center vertically
              onClick={() => plusSlides(-1)}
          >
              <span className="text-large">&#10094;</span>
          </a>
          <a className="next cursor-pointer border-4 border-black flex items-center justify-center h-[100%] p-2 absolute top-1/2 right-[-30px] bg-slate-400 text-white font-bold transition duration-600 ease-in-out rounded-l-[3px] select-none hover:bg-black/80"
              style={{ transform: 'translateY(-50%)' }} // Center vertically
              onClick={() => plusSlides(1)}
          >
              <span className="text-large">&#10095;</span>
          </a>
        </>
    )
}
ContactSlides.propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,  // `img` can be any type if it's an imported image file
        form: PropTypes.node.isRequired,
        index: PropTypes.number.isRequired,
      })
    ).isRequired,
};