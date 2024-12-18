import MainPage from './MainPages/Pages/mainPage';
import techCV from '/CV/Tech.pdf';
import skillsCV from '/CV/Skills.pdf';
const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "techCV",
    element: (
      <div style={{ width: "100%", height: "100vh" }}> {/* Ensure the parent takes full viewport */}
        <iframe
          src={techCV}
          title="Tech CV"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }} // Block ensures iframe acts like a block element
        />
      </div>
    ),
  },
  {
    path: "skillsCV",
    element: (
      <div style={{ width: "100%", height: "100vh" }}> {/* Ensure the parent takes full viewport */}
        <iframe
          src={skillsCV}
          title="Skill Based CV"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }} // Block ensures iframe acts like a block element
        />
      </div>
    ),
  }
];

export default routes;