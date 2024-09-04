import Contact from "./MainPages/Pages/Contact/contact";
import Home from "./MainPages/Pages/Home/home";
import Project from "./MainPages/Pages/Projects/projects";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;