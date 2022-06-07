import Home from "../components/Home";
import NavBar from "../components/shared/Navbar";
import Footer from "../components/Footer";

const Landing = () => (
  <div>
    <div className="bg-light max-h-screen flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="h-full">
        <Home />
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  </div>
);

export default Landing;
