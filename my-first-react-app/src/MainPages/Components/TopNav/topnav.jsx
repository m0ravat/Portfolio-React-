import { Link } from "react-router-dom";
import MR from "./MR.png";
import git from './github.svg';
import vercel from './vercel.svg';
function TopNav(){
    return(
        <nav className="fixed top-0 left-0 w-full h-10 flex items-center justify-between px-4 mt-4 z-10">
            <ul className='float-left'>
                <li><img src={MR} alt="Logo" className=' h-10'/></li>
            </ul>
            <ul className="flex space-x-20 text-2xl">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="flex space-x-8">
                <li>
                    <Link to="https://github.com/m0ravat" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="GitHub" className="h-10" />
                    </Link>
                </li>
                <li>
                    <Link to="https://vercel.com/m0ravats-projects" target="_blank" rel="noopener noreferrer">
                        <img src={vercel} alt="Vercel" className="h-10" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default TopNav