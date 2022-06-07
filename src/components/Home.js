import Image from "next/image";
import Navbar from "./shared/Navbar";

import video_img from "../components/shared/assets/vid_screenshot.png";
import crates from "../components/shared/assets/cratesbg.png";

const Home = () => {
  return (
    <div>
      <div className="pt-12 w-full text-center overflow-y-clip">
        <div className="text-[32px] uppercase">
          Welcome to <span className="text-metacrateRed">Meta Crate.</span>
        </div>
        <div className="my-8 px-10">
          <Image src={video_img} alt="screenshot" />
        </div>
        <div className="text-[16px] uppercase px-8">
          COLLECT, CONSUME, AND TRADE EXCLUSIVE NFT RECORDS FROM YOUR FAVORITE
          ARTISTS
        </div>
        <div className="w-full pt-10">
          <Image src={crates} alt="crate background" />
        </div>
      </div>
    </div>
  );
};
export default Home;
