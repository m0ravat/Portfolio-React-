import code from './Media/code.svg';
import logo from '././../../Components/TopNav/Images/github.svg';
import { HeroSlides } from '../../Components/SlideShow/slides';
function Hero() {
    const heroSlides = [
      {img: code, text: " Hi, my name is Muhammad Ravat and this is my portfolio. To find out more about me you can click on", index: 0},
      {img: logo, text: "Hi, my name is and i am so cool", index:1},
    ];
    return(
        <>
        <div className="slideshow-container w-[90%] relative mx-auto">
          <HeroSlides
          slides = {heroSlides}
          />

        </div> <br />
        </>
    )
}
export default Hero