import '../main.css'
import { Link } from "react-router-dom";

function TopNav(){
    return(
        <nav>
            <ul className='float-left'>
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </ul>
        </nav>
    )
}
export default TopNav