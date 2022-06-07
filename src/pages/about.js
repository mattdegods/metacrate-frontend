import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import cratesplit from "../components/shared/assets/cratesplit.png";
import Arrow from "../components/shared/assets/Arrow";
import RedPolygon from "../components/shared/assets/RedPolygon";

const About = () => (
  <div className="relative">
    <div>
      <NavBar />
    </div>
    <div className="py-8 mt-8 w-full text-center">
      <div className="text-[32px] uppercase">Welcome to Meta Crate.</div>
      <div className="my-8 px-10">
        <Image src={cratesplit} alt="crate description" />
      </div>
      <div className="pb-3 text-left text-[14px] px-10">
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
    {/* the roadmap */}
    <div className="px-[80px] mb-10">
      <div className="text-[32px] text-center uppercase pb-6">The Roadmap</div>
      {/* phase 1 graphic here */}
      <div className="flex items-center justify-center space-x-3">
        <div className="h-full">{RedPolygon}</div>
        <div className="h-full text-metacrateRed text-[24pz]">phase 1</div>
      </div>
      <ul className="pt-6 pb-12">
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
        <div className="h-full text-metacrateRed text-[24pz]">phase 2</div>
      </div>
      <ul className="pt-6 pb-12">
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
    {/* footer / the team */}
    <div className="w-full h-[230px] px-10 bg-metacrateRed">
      <div className="h-full flex flex-col justify-between py-12">
        <div className="font-ubuntu text-metacrateWhite text-center text-lg">
          THE TEAM
        </div>
      </div>
    </div>
  </div>
);

export default About;
