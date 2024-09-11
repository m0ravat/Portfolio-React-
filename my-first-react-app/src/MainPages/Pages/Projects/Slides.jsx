import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <h1 className='text-2xl border-b-2 border-black mb-4'>Main Projects: </h1>
      {slides.map(({ img, title, desc, link }, index) => (
        <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'block' : 'hidden'} fade bg-fuchsia-600`}>
          <div
            className={`flex justify-between border-4 border-gray-950 bg-cover bg-center md:h-96 h-64 sm:h-80   ${clickedImageIndex === index ? 'opacity-90' : 'opacity-100'}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => displayText(index)} // Show/hide text and reduce opacity on click
          >
            <p className={`text-2xl p-10 text-white bg-black ${visibleTextIndex === index ? 'block' : 'hidden'}`}>
              {title} <br />
              {desc} <Link to={link}>View</Link>
            </p>
          </div>
        </div>
      ))}
      <a
        className="prev cursor-pointer absolute top-1/2 -mt-[0px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-r-[3px] select-none hover:bg-black/80"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>
      <a
        className="next cursor-pointer absolute top-1/2 right-0 -mt-[0px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-l-[3px] select-none hover:bg-black/80"
        onClick={() => plusSlides(1)}
      >
        &#10095;
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