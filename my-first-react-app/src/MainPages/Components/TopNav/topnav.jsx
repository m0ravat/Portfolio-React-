import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import MR from "./Images/MR1.png";
import { useState} from 'react';
import Dark from "./dark";
import './style.css'
function TopNav(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 z-10 max-[900px]:justify-normal bg-white  dark:bg-black">
      <ul className='float-left'>
        <li><button onClick={toggleSidebar} className="flex text-black dark:text-white items-center gap-1 font-bold text-standard round"><img src={MR} alt="Logo" className='h-16 dark:bg-white text-white rounded-2xl  p-1 ' /> Muhammad Ravat</button></li>
      </ul>
      <ul className="flex space-x-[30%] text-standard max-[650px]:hidden text-black dark:text-white ml-20">
      <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
      <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
      <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
      </ul>
      <ul className="flex space-x-[10%] max-[900px]:absolute right-0 pr-4">
          <li><Dark /></li>
      </ul>
          
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-20">
          <button onClick={toggleSidebar} className="absolute top-5 right-5 text-3xl">
            &times;
          </button>
          <ul className="space-y-8 text-3xl">
            <img src={MR} alt="Logo" className="bg-slate-600 rounded-full" />
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to ="https://github.com/m0ravat"target="_blank" rel="noopener noreferrer">GitHub</Link></li>
            <li><Link to ="https://vercel.com/m0ravats-projects"target="_blank" rel="noopener noreferrer">My Websites</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};  
export default TopNav