import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import java from './Media/javaImg.jpeg'
import notes from './Media/logo.png'
import port from './Media/portfolioImg.jpeg'
import python from './Media/pythonImg.jpeg'
import web from './Media/webImg.jpeg'
import { ProjectSlides } from "./Slides"
function Project(){
    const highlights = [
        {img:notes, title:"MyNotesToDo App", desc:"This is my app where you can create projects with tasks and colour coded dates to keep up with which need to be done. You can see the details of it ",
            link:"#notes", index:0
        },
        {img:port, title:"Personal Portfolio", desc:"This is my personal portfolio, which displays all relevant information about me. You can see more information by clicking ",
            link:"#port", index:1
        },
        {img:java, title:"Module Enrolment System", desc:"This is my first large scale project in java, allowing a student to enrol on a class of his choosing. For more information click ",
            link:"#module", index:2
        },
    ]
    return(
        <div className="mt-4 flex flex-col min-h-screen" >
            <TopNav />
            <div className="p-8 mt-20">
                <div className="slideshow-container w-[90%] relative mx-auto">
                    <ProjectSlides slides = {highlights} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Project