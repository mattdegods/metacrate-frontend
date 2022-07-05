import Home from "../components/Home";
import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import crates_mobile from "../components/shared/assets/crates_mobile.png";
import crates_desktop from "../components/shared/assets/crates_desktop.png";

const Landing = () => (
  <div className="relative h-screen overflow-hidden">
    <div className="bg-light flex flex-col md:flex-none h-full justify-start">
      <div className="mb-auto">
        <NavBar />
      </div>
      <div className="h-[500px] md:h-auto md:mb-auto">
        <Home />
      </div>
      <div className="h-[250px] md:hidden" />
      {/* mobile crates */}
      <div className="md:hidden absolute -bottom-20 -z-10">
        <Image src={crates_mobile} alt="crate background mobile" />
      </div>
      {/* desktop crates */}
      <div className="hidden md:block absolute -bottom-6 max-w-[2000px] lg:-bottom-10 xl:-bottom-20 2xl:-bottom-32 -z-10">
        <Image src={crates_desktop} alt="crate background desktop" />
      </div>
    </div>
  </div>
);

export default Landing;
