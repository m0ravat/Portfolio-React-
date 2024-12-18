
import Footer from "../../Components/footer"
import background from './Media/glamorous.svg'
import { ContactSlides } from "./Slides"
function Contact(){
    const ContactElements = [
        {img: background, form:(
            <div className="text-standard p-2">
                <h1 className='border-2 border-b-black dark:border-b-white border-r-0 border-l-0 border-t-0 mb-2 text-large'>Contact Details</h1>
                If you would like to get in touch with me personally you can do so through: <br />
                Phone : +44 (0)7769004379 <br />
                Email : moravat763@gmail.com <br />
                If you would like to leave feedback for the website you can do so on the next slides.  
            </div>
        ),index:0},
        {img: background, form:(
            <form action="mailto:moravat763@gmail.com" method="post" encType="text/plain" className="flex flex-col items-start w-full max-w-3xl p-4 bg-opacity-90 text-standard overflow-hidden">
            <fieldset className="w-full p-4 bg-[#4bc497] text-[rgb(118,10,135)] font-bold text-sm">
              <legend className="bg-zinc-100 text-blueviolet text-base p-2">Positive Feedback</legend>
              <label htmlFor="name1" className="block my-2">Name:</label>
              <input type="text" id="name1" placeholder="Your name" required minLength="3" className="w-full max-w-sm p-2 border border-gray-300"/>
              <label htmlFor="email1" className="block my-2">Email address:</label>
              <input type="email" id="email1" name="email" placeholder="youremail@email.com" className="w-full max-w-sm p-2 border border-gray-300"/>
              <p className="my-2">Are you a...</p>
              <div className="flex flex-col">
                <label><input type="radio" name="delivery" id="am1" value="am"/><span className="ml-2">Student</span></label>
                <label><input type="radio" name="delivery" id="pm1" value="pm"/><span className="ml-2">Employer</span></label>
                <label><input type="radio" name="delivery" id="eve1" value="eve"/><span className="ml-2">Other</span></label>
              </div>
              <label htmlFor="volume1" className="block mt-4">Rating for website:</label>
              <input type="range" id="volume1" name="volume" min="0" max="10" step="1" defaultValue="3" className="w-full max-w-sm"/>
              <label htmlFor="extraP1" className="block mt-4">Extra Comments:</label>
              <textarea name="extraP" id="extraP1" rows="5" className="w-full max-w-lg p-2 bg-green-600 text-white"></textarea>
              <div className="mt-4">
                <input type="submit" value="Submit" className="bg-orange-950 text-emerald-400 px-4 py-2 mr-4"/>
                <input type="reset" value="Reset" className="bg-orange-950 text-emerald-400 px-4 py-2"/>
              </div>
            </fieldset>
          </form>
        ),index:1},
        {img: background, form:(
            <form action="mailto:moravat763@gmail.com" method="post" encType="text/plain" className="flex flex-col items-start w-full max-w-8xl p-4 bg-opacity-90 text-standard overflow-hidden">
            <fieldset className="w-full p-4 bg-[#4bc497] text-[rgb(118,10,135)] font-bold text-sm">
              <legend className="bg-zinc-100 text-blueviolet text-base p-2">Improvements</legend>
              <label htmlFor="name" className="block my-2">Name:</label>
              <input type="text" id="name" placeholder="Your name" required minLength="3" className="w-full max-w-screen-md p-2 border border-gray-300"/>
              <label htmlFor="email" className="block my-2">Email address:</label>
              <input type="email" id="email" name="email" placeholder="youremail@email.com" className="w-full max-w-md p-2 border border-gray-300"/>
              <p className="my-2">Are you a...</p>
              <div className="flex flex-col">
                <label><input type="radio" name="delivery" id="am" value="am"/><span className="ml-2">Student</span></label>
                <label><input type="radio" name="delivery" id="pm" value="pm"/><span className="ml-2">Employer</span></label>
                <label><input type="radio" name="delivery" id="eve" value="eve"/><span className="ml-2">Other</span></label>
              </div>
              <p className="mt-4">Tick which pages you think need improvement:</p>
              <div className="flex flex-col">
                <label><input type="checkbox" name="pages" id="Home" value="Home" defaultChecked/><span className="ml-2">Home</span></label>
                <label><input type="checkbox" name="pages" id="About_Me" value="About_Me"/><span className="ml-2">About Me</span></label>
                <label><input type="checkbox" name="pages" id="Project" value="Project"/><span className="ml-2">Project</span></label>
                <label><input type="checkbox" name="pages" id="Contact" value="Contact me"/><span className="ml-2">Contact me</span></label>
              </div>
              <label htmlFor="extraP" className="block mt-4">Extra Comments:</label>
              <textarea name="extraP" id="extraP" rows="5" className="w-full max-w-lg p-2 bg-green-600 text-white"></textarea>
              <div className="mt-4">
                <input type="submit" value="Submit" className="bg-orange-950 text-emerald-400 px-4 py-2 mr-4"/>
                <input type="reset" value="Reset" className="bg-orange-950 text-emerald-400 px-4 py-2"/>
              </div>
            </fieldset>
          </form>
        ),index:2}
    ]
    return(
        <div className=" flex flex-col" id="contact">
            <div className="p-8">
                <div className="slideshow-container w-[70%] md:w-[90%] min-w-72 relative mx-auto">
                    <ContactSlides slides = {ContactElements}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact