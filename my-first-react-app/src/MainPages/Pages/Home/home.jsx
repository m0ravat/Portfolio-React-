import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import { HeroSlides } from './Slides';
import code from './Media/code.svg'
import './home.css'
function Home() {
  const Slides = [
    { img: code, text: (
      <div className='text-standard'>
        <h1 className='border-2 border-b-black mb-2 text-large'>Welcome to my Website!</h1>
        Hi, my name is Muhammad Ravat and this is my portfolio.
        To find out more about me you can click on the links at the top, or the menu button at the top on mobile. There is also a sitemap 
        on every page at the bottom. I am an aspiring software developer who is looking to specialise in backend. You can check out my 
        websites/Github or even my LinkedIn below: <br /> 
        <a href="https://vercel.com/m0ravats-projects" target='_blank' rel="noopener noreferrer" className='pl-2 text-rose-950'> • Vercel (My Websites)</a> <br />
        <a href="https://github.com/m0ravat" target="_blank" rel="noopener noreferrer" className='pl-2 text-rose-950'> • My GitHub</a> <br />
        <a href="https://www.linkedin.com/in/muhammad-ravat" target='_blank' rel='noopener noreferrer' className='pl-2 text-rose-950'> • LinkedIn</a>
      </div>
    ), index: 0 },
    
    { img: code, text: (
      <div className='text-standard'>
        <h1 className='border-2 border-b-black mb-2 text-large'>About Me</h1>
        As a muslim with an indian background growing up in East London, I have had to go through alot of adversity. 
        I am the first in my family to go to university. As a result, I am very motivated to reach my goals, especially as a 
        programmer. My journey started out by learning basic pseudocode in secondary school which established my fundamental knowledge,
        I then went on to learn Visual Basic in college. In university, I went over python, then Java (including basic OOP)
        and HTML/CSS/JS. Ever since I finished my first year, I decided to build on my knowledge by creating multiple projects, and I used
        The Odin Project to do so. This led me to learn React and now Tailwind CSS. I am hoping to go into a backend framework next since I 
        believe I have a strong foundation in frontend, and I am planning on starting to work on my Data Structures & Algorithms knowledge
        through LeetCode/HackerRank.
      </div>
    ), index: 1 },
  ];
  return (
    <div className="mt-4 flex flex-col min-h-screen">
      <TopNav />
      <div className="mt-20 slideshow-container w-[90%] relative mx-auto">
      <HeroSlides slides = {Slides} />
      </div>
      <Footer />
    </div>
  );
}


export default Home