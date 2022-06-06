import Image from "next/image";
import twitter from "./shared/assets/twitter.png";
import discord from "./shared/assets/discord.png";
import medium from "./shared/assets/medium.png";

const Footer = () => {
  return (
    <div className="w-full h-[220px]">
      <div className="h-[80%] px-10 bg-metacrateRed">
        <div className="h-full flex flex-col justify-between py-12">
          <div className="font-ubuntu text-metacrateWhite text-center text-lg">
            JOIN THE PARTY.
          </div>
          {/* social icons */}
          <div className="px-20 flex flex-row justify-between">
            <div className="">
              <Image src={discord} height="80px" width="80px" alt="discord" />
            </div>
            <div className="">
              <Image src={twitter} height="80px" width="80px" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20%] px-10 bg-metacrateBlack">
        <div className="h-full flex items-center justify-center md:justify-start">
          <div className="font-ubuntu text-xs text-metacrateWhite text-center">
            copyright metacrate 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
