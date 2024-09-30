import { useState } from 'react';
import PropTypes from 'prop-types';

export function ProjectSlides({ slides }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [visibleTextIndex, setVisibleTextIndex] = useState(null); // State to track visible text
  const [clickedImageIndex, setClickedImageIndex] = useState(null); // State to track clicked image
  const totalSlides = slides.length;

  // Function to handle text display toggle and opacity change
  function displayText(index) {
    setVisibleTextIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle text visibility
    setClickedImageIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle opacity
  }

  // Functions to change slides
  function plusSlides(n) {
    setSlideIndex((prev) => {
      let newIndex = prev + n;
      if (newIndex > totalSlides) return 1;
      if (newIndex < 1) return totalSlides;
      return newIndex;
    });
    setVisibleTextIndex(null); // Reset text visibility when slide changes
    setClickedImageIndex(null); // Reset clicked image opacity
  }

  return (
    <>
      {slides.map(({ img, title, desc, link }, index) => (
        <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'block' : 'hidden'} fade bg-fuchsia-600`}>
          
          <div className={`flex justify-between border-4 border-gray-950 bg-cover bg-center md:h-96 h-80 sm:h-80   ${clickedImageIndex === index ? 'opacity-90' : 'opacity-100'}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => displayText(index)}>
            <div className={`text-standard p-10 overflow-auto text-white bg-black ${visibleTextIndex === index ? 'block' : 'hidden'}`}>
              <h1 className='border-b-2 border-white text-standard mb-4'>{title}</h1>
              <p className='text-standard'>{desc} <a href={link} className='text-green-400'>here.</a></p>
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
  );
}

ProjectSlides.propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,  // `img` can be any type if it's an imported image file
        title: PropTypes.string.isRequired,
        desc:PropTypes.string.isRequired,
        link:PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
      })
    ).isRequired,
};
