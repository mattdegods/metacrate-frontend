import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import cratesplit from "../components/shared/assets/cratesplit.png";
import Arrow from "../components/shared/assets/Arrow";
import RedPolygon from "../components/shared/assets/RedPolygon";

import thirdbrain from "../components/shared/assets/THIRDBRAIN.png";
import web3devs from "../components/shared/assets/WEB3DEVS.png";
import uc from "../components/shared/assets/uc.png";
import Footer from "../components/Footer";
// need these icons in SVG if possible, like this:
//import ThirdBrain from "../components/shared/assets/thirdbrain";

const About = () => (
  <div className="relative">
    <div>
      <NavBar />
    </div>

    {/* mobile header */}
    <div className="py-8 mt-8 w-full text-center lg:hidden">
      <div className="text-[32px] uppercase">Welcome to MetaCrate.</div>
      <div className="my-8 px-10">
        <Image src={cratesplit} alt="crate description" />
      </div>
      <div className="pb-3 text-left text-[14px] sm:text-[20px] px-10 sm:px-20">
        Every Artist can have a second life; we're here to break Artists from
        the confines of their existing brand and label by offering them a new
        identity in the Metaverse.
        <br />
        <br />
        Meta Crate is the first music NFT platform for recording artists to
        release music in the Metaverse. Records will be regularly released to
        the community of crate owners with gamified ownership, listening
        parties, competitions, unique airdrops, artist activations and more.
        Only crate owners will be able to mint records while everyone else must
        purchase on the secondary markets.
        <br />
        <br />
        Solana is an alternative blockchain and cryptocurrency solution to the
        negative economic impact Ethereum has had on the environment.
      </div>
      <div className="w-full flex justify-center mt-6">{Arrow}</div>
    </div>

    {/* web header */}
    <div className="py-8 mt-8 w-full text-center hidden lg:block">
      <div className="text-[46px] uppercase">Welcome to <span className="text-metacrateRed">MetaCrate</span>.</div>
      <div className="flex flex-row items-center px-10">
        <div className="my-8 px-10 max-w-3xl">
          <Image src={cratesplit} alt="crate description" />
        </div>
        <div className="max-w-3xl h-fit w-1/2 py-6 px-4 mr-8 text-left text-[16px] rounded-lg bg-metacrateRed text-metacrateWhite">
          Every Artist can have a second life; we're here to break Artists from
          the confines of their existing brand and label by offering them a new
          identity in the Metaverse.
          <br />
          <br />
          Meta Crate is the first music NFT platform for recording artists to
          release music in the Metaverse. Records will be regularly released to
          the community of crate owners with gamified ownership, listening
          parties, competitions, unique airdrops, artist activations and more.
          Only crate owners will be able to mint records while everyone else must
          purchase on the secondary markets.
          <br />
          <br />
          Solana is an alternative blockchain and cryptocurrency solution to the
          negative economic impact Ethereum has had on the environment.
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 bg-[url('/images/cratesbg_desk.png')] bg-cover h-[227px]">
        <div className="w-full text-center my-auto">
          <p className="uppercase text-metacrateWhite text-[36px] pb-6">Read Our Roadmap</p>
          <Image src="/images/Arrow_web.svg" width="215px" height="67px" alt="arrow" />
        </div>
      </div>
    </div>

    {/* mobile roadmap */}
    <div className="px-16 sm:px-4 sm:w-1/2 mb-10 mx-auto">
      <div className="text-[32px] text-center uppercase pb-6">The Roadmap</div>
      {/* phase 1 graphic here */}
      <div className="flex items-center justify-center space-x-3">
        <div className="h-full">{RedPolygon}</div>
        <div className="h-full text-metacrateRed text-[24px]">phase 1</div>
      </div>
      <ul className="pt-6 pb-12">
        {/* dashed line */}
        <div className="absolute h-[490px] border-dashed border-l-2 border-l-metacrateBlack/70 left-[50px] translate-y-6 sm:hidden" />

        <li>
          <div className="pl-3 -translate-y-2">
            Announce
            <br />
            <span className="text-[#6B6B6B]">Discord and Twitter opening</span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Community Growth
            <br />
            <span className="text-[#6B6B6B]">
              Tease Artwork, Announce Partnerships & Giveaways
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            1st Artist Announce
            <br />
            <span className="text-[#6B6B6B]">
              We will announce our first artist and tease music
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Generation 1 Crate Mint
            <br />
            <span className="text-[#6B6B6B]">
              1,000 Gen 1 crates will be minted at 0.808 SOL / First 1,000 crate
              owners will be given the '808 Superfan' role
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            1st Record Release
            <br />
            <span className="text-[#6B6B6B]">
              First project released for open mint to all crate owners / Each
              mint will distribute a random single from the project
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            1st Free Project NFT
            <br />
            <span className="text-[#6B6B6B]">
              Project NFTs gifted to everyone who collects each single
            </span>
          </div>
        </li>
      </ul>

      <div className="flex items-center justify-center space-x-3">
        <div className="h-full">{RedPolygon}</div>
        <div className="h-full text-metacrateRed text-[24px]">phase 2</div>
      </div>
      <ul className="pt-6 pb-12">
        {/* dashed line */}
        <div className="absolute h-[360px] border-dashed border-l-2 border-l-metacrateBlack/70 left-[50px] translate-y-6 sm:hidden" />
        <li>
          <div className="pl-3 -translate-y-2">
            More Record Releases
            <br />
            <span className="text-[#6B6B6B]">
              Continue partnering and releasing more music to community
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Crate Web Experience Launch
            <br />
            <span className="text-[#6B6B6B]">
              Engage with your NFT vinyls in a never before seen way
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Charity Donation
            <br />
            <span className="text-[#6B6B6B]">
              Community vote on where to donate community wallet
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Events
            <br />
            <span className="text-[#6B6B6B]">
              In person LA event that is streamed virtually for our entire
              community
            </span>
          </div>
        </li>
        <li>
          <div className="pl-3 -translate-y-2">
            Metaverse Record Store
            <br />
            <span className="text-[#6B6B6B]">
              Purchase and development of the first record store in the
              Metaverse.
            </span>
          </div>
        </li>
      </ul>
    </div>

    {/* TO DO: ARTIST APPLICATION */}

    {/* MOBILE footer / the team */}
    <div className="w-full h-[230px] px-10 bg-metacrateRed lg:hidden">
      <div className="h-full flex flex-col justify-between py-8">
        <div className="font-ubuntu text-metacrateWhite text-center text-[32px]">
          THE TEAM
        </div>
        {/* three logos */}
        <div className="flex justify-between px-3 sm:px-20">
          <Image src={web3devs} alt="web3 devs logo" />
          <Image src={thirdbrain} alt="thirdbrain logo" />
          <Image src={uc} alt="uc logo" />
        </div>
      </div>
    </div>

    {/* WEB footer / the team */}
    <div className="w-full h-[230px] px-10 bg-metacrateBlack hidden lg:block">
      <div className="h-full py-8">
        <div className="font-ubuntu text-metacrateWhite text-center text-[32px] pb-3">
          THE TEAM
        </div>
        {/* three logos */}
        <div className="flex justify-evenly w-1/2 mx-auto">
          <Image src={web3devs} alt="web3 devs logo" />
          <Image src={thirdbrain} alt="thirdbrain logo" />
          <Image src={uc} alt="uc logo" />
        </div>
      </div>
    </div>
    <div className="hidden lg:block"><Footer /></div>
    
  </div>
);

export default About;
