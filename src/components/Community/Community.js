import Image from "next/image";
import Typography from "../shared/Typography";
import discord_large from "../assets/images/discordDuppy.png";
import twitter_large from "../assets/images/twitter-community.png";

const Community = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* left col */}
        <div className="text-center md:text-left ">
          <div className="flex flex-col justify-between h-full">
            <div>
              
              <Typography variant="header" color="secondary" styles="text-[20px] pb-4">
                DUPPIES COMMUNITY
              </Typography>
              <Typography
                variant="subheader"
                color="title"
                fontFamily="bingodilan"
                fontSize={['md','xl']}
              >
                Join the Discord & 
              </Typography>
              <Typography
                variant="subheader"
                color="title"
                fontFamily="bingodilan"
                fontSize={['md','xl']}
              >
                Follow Our Twitter
              </Typography>
            </div>
            <div className="hidden md:block mt-6 text-duppyGreen font-base-b text-lg lg:text-[30px] pb-6">
              and turn notifications on
            </div>
          </div>
        </div>
        {/* right col */}
        <div className="md:flex">
          <div className="mx-4 pt-6 hover:cursor-pointer hover:saturate-[5]">
            <a href="https://discord.gg/duppies" target="_blank" rel="noreferrer">
              <Image src={discord_large} alt="discord large" />
            </a>
          </div>
          <div className="mx-4 pt-6 hover:cursor-pointer hover:saturate-[5] ">
            <a href="https://twitter.com/duppiesnft" target="_blank" rel="noreferrer">
              <Image src={twitter_large} alt="twitter large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
