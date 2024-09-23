import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import background from './Media/glamorous.svg'
import { ContactSlides } from "./Slides"
function Contact(){
    const ContactElements = [
        {img: background, form:(
            <div className="text-standard p-2">
                <h1 className='border-2 border-b-black mb-2 text-large'>Contact Details</h1>
                If you would like to get in touch with me personally you can do so through: <br />
                Phone : +44 (0)7769004379 <br />
                Email : moravat763@gmail.com <br />
                If you would like to leave feedback for the website you can do so on the next slides.  
            </div>
        ),index:0},
        {img: background, form:(
            <form action="mailto:moravat763@gmail.com" method="post" encType="text/plain" className="flex flex-wrap text-standard overflow-hidden"> 
            <fieldset className="form one p-2 mb-12 mx-auto bg-[#4bc497] text-[rgb(118,10,135)] font-bold text-[calc(10px+0.390625vw)] float-left"> 
                <legend className="bg-zinc-100 text-blueviolet text-large p-1">Positive Feedback</legend> 
                
                <label htmlFor="name1" className="my-2 mr-2">Name:</label> 
                <input type="text" id="name1" placeholder="Your name" required minLength="3" className="max-w-[230px] my-2 p-1"/><br /><br /> 
                
                <label htmlFor="email1" className="my-2 mr-2">Email address:</label> 
                <input type="email" id="email1" name="email" placeholder="youremail@email.com" className="max-w-[230px] my-2 p-1"/><br /><br /> 
                
                Are you a... <br /> 
                <input type="radio" name="delivery" id="am1" value="am" className="my-2"/><label htmlFor="am1" className="my-2">Student</label><br /> 
                <input type="radio" name="delivery" id="pm1" value="pm" className="my-2 p-1"/><label htmlFor="pm1" className="my-2">Employer</label><br /> 
                <input type="radio" name="delivery" id="eve1" value="eve" className="my-2"/><label htmlFor="eve1" className="my-2">Other</label><br /><br /> 
                
                <label htmlFor="volume1" className="my-2 mr-2">Rating for website:</label> 
                <input type="range" id="volume1" name="volume" min="0" max="10" step="1" defaultValue="3" className="max-w-[230px] my-2"/><br /><br /> 
                
                <label htmlFor="speed1" className="my-2 mr-2">Speed:</label> 
                <input type="range" id="speed1" name="speed" min="0" max="10" step="1" defaultValue="3" className="max-w-[230px] my-2"/><br /><br /> 
                
                <label htmlFor="Quality1" className="my-2 mr-2">Quality of information available:</label> 
                <input type="range" id="Quality1" name="Quality" min="0" max="10" step="1" defaultValue="3" className="max-w-[230px] my-2"/><br /><br /> 
                
                <label htmlFor="extraP1" className="my-2">Extra Comments:</label><br /> 
                <textarea name="extraP" id="extraP1" rows="7" className="my-2 bg-green-600 text-white p-2 w-[98%]"></textarea><br /> 
                
                <input type="submit" value="Submit" className="buttons bg-orange-950 text-emerald-400 text-lg mr-4 p-2"/> 
                <input type="reset" value="Reset" className="buttons bg-orange-950 text-emerald-400 text-lg p-2"/> 
            </fieldset>
            </form>
        ),index:1},
        {img: background, form:(
            <form action="mailto:moravat763@gmail.com" method="post" encType="text/plain" id="ff" className="flex flex-wrap text-standard overflow-hidden"> 
            <fieldset className="form two p-2 mb-12 mx-auto bg-[#4bc497] text-[rgb(118,10,135)] font-bold text-[calc(10px+0.390625vw)] float-right"> 
                <legend className="bg-zinc-100 text-blueviolet text-large p-1">Improvements</legend> 
                <label htmlFor="name" className="my-2 mr-2">Name:</label> 
                <input type="text" id="name" placeholder="Your name" required minLength="3" className="max-w-[230px] my-2 p-1"/><br /> 
                <label htmlFor="email" className="my-2 mr-2">Email address:</label> 
                <input type="email" id="email" name="email" placeholder="youremail@email.com" className="max-w-[230px] my-2 p-1"/><br /> 
                Are you a... <br /> 
                <input type="radio" name="delivery" id="am" value="am" className="my-2"/><label htmlFor="am" className="my-2 ml-2">Student</label><br /> 
                <input type="radio" name="delivery" id="pm" value="pm" className="my-2 p-1"/><label htmlFor="pm" className="my-2 ml-2">Employer</label><br /> 
                <input type="radio" name="delivery" id="eve" value="eve" className="my-2"/><label htmlFor="eve" className="my-2 ml-2">Other</label><br /><br /> 
                Tick which pages you think need improvement: <br /> 
                <input type="checkbox" name="pages" id="Home" value="Home" defaultChecked className="my-2"/><label htmlFor="Home" className="my-2 ml-2">Home</label><br /> 
                <input type="checkbox" name="pages" id="About_Me" value="About_Me" className="my-2"/><label htmlFor="About_Me" className="my-2 ml-2">About Me</label><br /> 
                <input type="checkbox" name="pages" id="Project" value="Project" className="my-2"/><label htmlFor="Project" className="my-2 ml-2">Project</label><br /> 
                <input type="checkbox" name="pages" id="Contact" value="Contact me" className="my-2"/><label htmlFor="Contact" className="my-2 ml-2">Contact me</label><br /><br /> 
                <label htmlFor="extraP" className="my-2">Extra Comments:</label><br /> 
                <textarea name="extraP" id="extraP" rows="7" className="my-2 bg-green-600 text-white p-2 w-[98%]"></textarea><br /> 
                <input type="submit" value="Submit" className="buttons bg-orange-950 text-emerald-400 text-lg mr-4 p-2"/> 
                <input type="reset" value="Reset" className="buttons bg-orange-950 text-emerald-400 text-lg p-2"/> 
            </fieldset> 
            </form>

        ),index:2}
    ]
    return(
        <div className="mt-4 flex flex-col min-h-screen" >
            <TopNav />
            <div className="p-8 mt-20">
                <div className="slideshow-container w-[90%] min-w-72 relative mx-auto">
                    <ContactSlides slides = {ContactElements}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact