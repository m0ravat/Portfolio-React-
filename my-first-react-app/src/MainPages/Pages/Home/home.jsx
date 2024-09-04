import TopNav from "../../Components/TopNav/topnav"
import Footer from "../../Components/footer"
import Hero from "./hero";
import './home.css'
function Home() {
  return (
    <div className="mt-4 flex flex-col min-h-screen">
      <TopNav />
      <div className="mt-20">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}


export default Home