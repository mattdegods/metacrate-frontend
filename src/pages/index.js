import Home from "../components/Home";
import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import crates_mobile from "../components/shared/assets/crates_mobile.png";
import crates_desktop from "../components/shared/assets/crates_desktop.png";
import crates_ultrawide from "../components/shared/assets/crates_ultrawide.png";

const Landing = () => (
  <div className="relative h-screen bg-metal bg-cover bg-top overflow-hidden">
    <div className="h-full flex flex-col justify-between">
      <div>
        <NavBar />
      </div>
      <div className="h-[480px] md:h-auto flex items-center">
        <Home />
      </div>
      <div className="h-[20%]" />
    </div>

    {/* mobile crates */}
    <div className="sm:hidden absolute -bottom-20 z-0">
      <Image src={crates_mobile} alt="crate background mobile" />
    </div>
    {/* desktop crates */}
    <div className="hidden sm:block absolute -bottom-6 lg:-bottom-10 xl:-bottom-20 2xl:-bottom-32 4xl:hidden z-0">
      <Image src={crates_desktop} alt="crate background desktop" />
    </div>
    {/* ultrawide crates */}
    <div className="hidden absolute -bottom-20 4xl:block z-0">
      <Image src={crates_ultrawide} alt="crate background ultrawide" />
    </div>
  </div>
);

export default Landing;
