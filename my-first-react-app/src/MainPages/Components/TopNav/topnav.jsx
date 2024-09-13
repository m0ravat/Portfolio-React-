import { Link } from "react-router-dom";
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
        <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 z-10 max-[900px]:justify-normal">
          <ul className='float-left'>
            <li>
            <button onClick={toggleSidebar} className="flex items-center gap-1 font-bold text-standard">
                <img src={MR} alt="Logo" className='h-16 ' /> Muhammad Ravat
            </button>
            </li>
          </ul>
          <ul className="flex space-x-[30%] text-standard max-[650px]:hidden dark:text-pink-500 ml-20">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="flex space-x-[10%] max-[900px]:absolute right-0 pr-4">
            <li>
              <Dark />
            </li>
          </ul>
          
          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-20">
              <button
                onClick={toggleSidebar}
                className="absolute top-5 right-5 text-3xl"
              >
                &times;
              </button>
              <ul className="space-y-8 text-3xl">
                <img src={MR} alt="Logo" className="bg-slate-600 rounded-full" />
                <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
                <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
                <li><Link to ="https://github.com/m0ravat"target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                <li><Link to ="https://vercel.com/m0ravats-projects"target="_blank" rel="noopener noreferrer">My Websites</Link></li>
              </ul>
            </div>
          )}
        </nav>
      );
};  
export default TopNav