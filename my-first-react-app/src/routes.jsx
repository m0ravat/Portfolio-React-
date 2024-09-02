import Contact from "./MainPages/Pages/contact";
import Home from "./MainPages/Pages/home";
import Project from "./MainPages/Pages/projects";

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