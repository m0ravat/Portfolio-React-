import { useState, useEffect } from 'react';
import code from './Media/code.svg';
function Hero() {
    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = 3; // Total number of slides

    useEffect(() => {
      const slides = document.getElementsByClassName('mySlides');
  
      // Ensure the slideIndex is within bounds
      let newIndex = slideIndex;
      if (slideIndex > totalSlides) {
        newIndex = 1;
      } else if (slideIndex < 1) {
        newIndex = totalSlides;
      }
  
      // Only update slideIndex if it has changed
      if (newIndex !== slideIndex) {
        setSlideIndex(newIndex);
        return; // Exit early to prevent further DOM updates
      }
  
      // Hide all slides
      Array.from(slides).forEach((slide) => {
        slide.style.display = 'none';
      });
  
      // Show the current slide if slides exist
      if (slides[newIndex - 1]) {
        slides[newIndex - 1].style.display = 'block';
      }
    }, [slideIndex]);
  
    // Functions to change slides
    function plusSlides(n) {
      setSlideIndex((prev) => prev + n);
    }
    return(
        <>
        <div className="slideshow-container w-[90%] relative mx-auto">
        {/* Full-width images with number and caption text */}
        <div className="mySlides hidden fade bg-fuchsia-500">
            <div className="flex justify-between h-96  border-4 border-gray-950 p-4 bg-contain bg-center"style={{ backgroundImage: `url(${code})`}}>
                <div className=" w-full bg-contain  bg-center" >
                    <p className="text-xl bg-slate-100 p-4 bg-opacity-80">
                        Hi, my name is Muhammad Ravat and this is my portfolio. To find out more about me you can click on 
                    </p>
                </div>
            </div>
        </div>

        <div className="mySlides hidden fade">
            <div className="flex justify-between h-96 bg-fuchsia-500 border-4 border-gray-950 p-16">
                <p className="text-xl  ">
                    Hi, my name is Muhammad Ravat and this is my portfolio. To find out more about me you can click on 
                </p>
            </div>
        </div>

        <div className="mySlides hidden fade">
            <div className="flex justify-between h-96 bg-fuchsia-500 border-4 border-gray-950 p-16">
                <p className="text-xl  ">
                    Hi, my name is Muhammad Ravat and this is my portfolio. To find out more about me you can click on 
                </p>
            </div>
        </div>

        {/* Next and previous buttons */}
        <a className="prev cursor-pointer absolute top-1/2 -mt-[22px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-r-[3px] select-none hover:bg-black/80" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next cursor-pointer absolute top-1/2 right-0 -mt-[22px] px-[16px] text-white font-bold text-[18px] transition duration-600 ease-in-out rounded-l-[3px] select-none hover:bg-black/80" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />

        </>

    )
}
export default Hero