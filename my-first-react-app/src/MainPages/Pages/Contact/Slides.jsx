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
            <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'block' : 'hidden'} fade bg-fuchsia-500`}>
              <div className="flex justify-between h-fit border-4 border-gray-950  bg-contain bg-center " style={{ backgroundImage: `url(${img})` }}>
                <div className="text-standard bg-slate-100 p-2 bg-opacity-90  mx-auto">
                    {form}
                </div>
              </div>
            </div>
        ))}
        <a className="prev cursor-pointer absolute top-1/2 -mt-[22px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-r-[3px] select-none hover:bg-black/80" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next cursor-pointer absolute top-1/2 right-0 -mt-[22px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-l-[3px] select-none hover:bg-black/80" onClick={() => plusSlides(1)}>&#10095;</a>
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