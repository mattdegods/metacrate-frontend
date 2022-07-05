import Image from "next/image";
import twitter from "./shared/assets/twitter.png";
import discord from "./shared/assets/discord.png";

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="h-[120px] px-10 bg-metacrateRed z-50">
        <div className="h-full flex flex-row py-12 justify-center items-center">
          <div className="">
            <Image src={discord} height="80px" width="80px" alt="discord" />
          </div>
          <div className="font-ubuntu text-metacrateWhite text-center text-lg px-4">
            JOIN THE PARTY.
          </div>
          <div className="">
            <Image src={twitter} height="80px" width="80px" alt="twitter" />
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
