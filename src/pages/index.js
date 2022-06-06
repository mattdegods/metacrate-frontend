import Home from "../components/Home";
import NavBar from "../components/shared/Navbar";
import Footer from "../components/Footer";

const Landing = () => (
  <div>
    <div className="bg-light h-screen flex flex-col justify-between">
      <div>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
);

export default Landing;
