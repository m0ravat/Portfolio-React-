import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import java from './Media/javaImg.jpeg'
import notes from './Media/logo.png'
import port from './Media/portfolioImg.jpeg'
import python from './Media/pythonImg.jpeg'
import web from './Media/webImg.jpeg'
import { ProjectSlides } from "./Slides"
import { ProjectsRef } from "./ProjectsRef"
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
    const websites = [
        {title:"Portfolio", desc:"A website designed to showcase my web design and web development skills, while progressively using skills I have learnt through the Odin Project, from vanilla HTML/CSS and JS to using tools like webpack,vercel, React and TailwindCSS",
            webLink:"https://www.moravat.me/", gitLink:"https://github.com/m0ravat/webPortfolio", img:python, id:"port"
        },
        {title:"MyNotesToDo Application", desc:"This was a website I created that allows users to create tasks for projects and date them to keep up with them, seperating ongoing ones to finished tasks. It stores all data in localStorage, and implements basic CRUD techniques.",
            webLink:"https://www.mynotestodo.com/",gitLink:"https://github.com/m0ravat/ToDoListApp",img:web, id:"notes"
        },
        {title:"Weather App", desc:"This was a basic weather app I made to demonstrate my use of API's. I used the visual crossing API to get the weather when the address is inputted, and I used the GIPHY API to generate a gif upon the pressing of a button. I also tailored it to mobile resolution by centering it for bigger resolutions.",
            webLink:"https://weather-app-steel-mu.vercel.app/",gitLink:"https://github.com/m0ravat/WeatherApp", img:web, id:"weather"
        },
        {title:"CV Generator",desc:"This was my first project in React, where I prompt a user to give some inputs through a form, which generates a generic CV showing a person's introduction, their experience and skills. It was designed to practice some basic principles within react, such as state management and the use of props.",
            webLink:"https://cv-maker-vert-seven.vercel.app/", gitLink:"https://github.com/m0ravat/CVMaker", img:web, id:"cv"
        },
    ]
    return(
        <div className="mt-4 flex flex-col min-h-screen" >
            <TopNav />
            <div className="p-8 mt-20">
                <div className="slideshow-container w-[90%] relative mx-auto">
                    <ProjectSlides slides = {highlights} />
                </div>
            <ProjectsRef websites = {websites} />
            </div>
            <Footer />
        </div>
    )
}
export default Project