import Image from "next/image";
import crates_mobile from "./shared/assets/crates_mobile.png";
import crates_desktop from "./shared/assets/crates_desktop.png";

import video_img from "../components/shared/assets/vid_screenshot.png";

const Home = () => {
  return (
    <div>
      <div className="pt-10 w-full text-center">
        <div className="text-[32px] uppercase">
          Welcome to <span className="text-metacrateRed">MetaCrate.</span>
        </div>
        <div className="my-8 px-10">
          <Image src={video_img} width="360px" height="201px" alt="screenshot" />
        </div>
        <div className="text-[16px] uppercase px-8 pb-10">
          COLLECT, CONSUME, AND TRADE EXCLUSIVE NFT RECORDS FROM YOUR FAVORITE
          ARTISTS
        </div>
      </div>

      {/* mobile crates */}
      <div className="sm:hidden absolute bottom-20 md:bottom-24 -z-10">
        <Image src={crates_mobile} alt="crate background mobile" />
      </div>
      {/* desktop crates */}
      {/* attempting to get crates to show properly... */}
      <div className="hidden sm:block absolute bottom-24 xl:bottom-8 lg:bottom-16 -z-10">
        <Image src={crates_desktop} alt="crate background desktop" />
      </div>

    </div>
  );
};
export default Home;
