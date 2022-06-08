import Image from "next/image";
import twitter from "./shared/assets/twitter.png";
import discord from "./shared/assets/discord.png";
import medium from "./shared/assets/medium.png";
import crates_mobile from "./shared/assets/crates_mobile.png";
import crates_desktop from "./shared/assets/crates_desktop.png";

const Footer = () => {
  return (
    <div className="w-full relative pt-6">
      {/* mobile crates */}
      <div className="sm:hidden pt-[10px] absolute -translate-y-32 -z-10">
        <Image src={crates_mobile} alt="crate background mobile" />
      </div>
      {/* desktop crates */}
      {/* cant get crates to show properly... */}
      <div className="absolute -translate-y-32 sm:z-10">
        <Image src={crates_desktop} alt="crate background desktop" />
      </div>
      <div className="h-[220px] sm:h-[111px] px-10 bg-metacrateRed z-20">
        <div className="h-full flex flex-col sm:flex-row py-12 justify-center items-center">
          <div className="hidden sm:block">
            <Image src={discord} height="80px" width="80px" alt="discord" />
          </div>
          <div className="font-ubuntu text-metacrateWhite text-center text-lg px-4">
            JOIN THE PARTY.
          </div>
          <div className="hidden sm:block">
            <Image src={twitter} height="80px" width="80px" alt="twitter" />
          </div>
          {/* mobile social icons */}
          <div className="px-20 flex flex-row justify-between sm:hidden">
            <div>
              <Image src={discord} height="80px" width="80px" alt="discord" />
            </div>
            <div>
              <Image src={twitter} height="80px" width="80px" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-full px-10 bg-metacrateBlack">
        <div className="h-full flex items-center justify-center">
          <div className="font-ubuntu text-xs text-metacrateWhite text-center">
            copyright metacrate 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
