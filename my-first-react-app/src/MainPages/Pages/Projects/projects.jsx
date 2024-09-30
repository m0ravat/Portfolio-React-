import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import java from './Media/javaImg.jpeg'
import notes from './Media/Website_Images/MyNotes.png'
import port from './Media/Website_Images/Portfolio.png'
import trio from './Media/Website_Images/mix.png'
import module from './Media/Project_Images/Module.png'
import react from  './Media/Website_Images/React.png'
import api from './Media/Website_Images/API.png'
import react2 from './Media/Website_Images/reactt.png'
import { ProjectSlides } from "./Slides"
import { ProjectsRef, ProjectsRef2 } from "./ProjectsRef"
function Project(){
    const highlights = [
        {img:notes, title:"MyNotesToDo App", desc:"This is my app where you can create projects with tasks and colour coded dates to keep up with which need to be done. The tech stack used was: HTML/CSS/JS, GitHub, Vercel, SquareSpace Domains. You can see the details of it ",
            link:"#notes", index:0
        },
        {img:port, title:"Personal Portfolio", desc:"This is my personal portfolio, which displays all relevant information about me. The tech stack used for this is: React, GitHub, Vercel, SquareSpace Domains. You can see more information by clicking ",
            link:"#port", index:1
        },
        {img:module, title:"Module Enrolment System", desc:"This is my first large scale project in java, allowing a student to enrol on a class of his choosing. This was created using Java via IntelliJ IDE. For more information click ",
            link:"#module", index:2
        },
    ]
    const websites = [
        {title:"Portfolio", desc:"A website designed to showcase my web design and web development skills, while progressively using skills I have learnt through the Odin Project, from vanilla HTML/CSS and JS to using tools like Webpack, Vercel, React and TailwindCSS, it's designed to give potential employers a brief look into my skills as a developer.",
            webLink:"https://www.moravat.me/", gitLink:"https://github.com/m0ravat/webPortfolio", img:react, id:"port"
        },
        {title:"ToDo App", desc:"This was a website I created that allows users to create tasks for projects and date them to keep up with them, seperating ongoing ones to finished tasks. It stores all data in localStorage, and implements basic CRUD techniques. It also has a form for user input and was the first program which showcases my data management skills.",
            webLink:"https://www.mynotestodo.com/",gitLink:"https://github.com/m0ravat/ToDoListApp",img:trio, id:"notes"
        },
        {title:"Weather App", desc:"This was a basic weather app I made to demonstrate my use of API's. I used the visual crossing API to get the weather when the address is inputted, and I used the GIPHY API to generate a gif upon the pressing of a button. I also tailored it to mobile resolution by centering it for bigger resolutions.",
            webLink:"https://weather-app-steel-mu.vercel.app/",gitLink:"https://github.com/m0ravat/WeatherApp", img:api, id:"weather"
        },
        {title:"CV Generator",desc:"This was my first project in React, where I prompt a user to give some inputs through a form, which generates a generic CV showing a person's introduction, their experience and skills. It was designed to practice some basic principles within react, such as state management and the use of prop validation, which helped in securing the foundation of using React.",
            webLink:"https://cv-maker-vert-seven.vercel.app/", gitLink:"https://github.com/m0ravat/CVMaker", img:react2, id:"cv"
        },
    ]
    const projects = [
        {title:"Module Enrolment", desc:"A program designed to allow a student to enrol on one of multiple classes, and choosing a seat. This demonstrated my OOP skills by using a Module class, a Seat class and a Person class. It was designed on IntelliJ in Java and was inspired by a similar plane booking system I did at university.",
            gitLink:"https://github.com/m0ravat/Enrol", img:java, id:"module"
        },
    ]
    return(
        <div className="mt-4 flex flex-col min-h-screen" >
            <TopNav />
            <div className="p-8 mt-20">
            <h1 className='text-large font-bold border-b-2 border-black mb-4 dark:border-white text-black dark:text-white '>Main Projects (Click on the image to see more information): </h1>
                <div className="slideshow-container w-[90%] relative mx-auto">
                    <ProjectSlides slides = {highlights} />
                </div>
            <ProjectsRef websites = {websites} />
            <ProjectsRef2 projects = {projects} />
            </div>
            <Footer />
        </div>
    )
}
export default Project