import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import cratesplit from "../components/shared/assets/cratesplit.png";
import Arrow from "../components/shared/assets/Arrow";

const About = () => (
  <div>
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
      <div className="text-[32px] text-center uppercase">The Roadmap</div>
      {/* phase 1 graphic here */}
      <ul className="py-6">
        <li>
          <div className="px-3 -translate-y-2">
            Announce
            <br />
            <span className="text-[#6B6B6B]">Discord and Twitter opening</span>
          </div>
        </li>
        <li>
          <div className="px-3 -translate-y-2">
            Community Growth
            <br />
            <span className="text-[#6B6B6B]">
              Tease Artwork, Announce Partnerships & Giveaways
            </span>
          </div>
        </li>
        <li>
          <div className="px-3 -translate-y-2">
            1st Artist Announce
            <br />
            <span className="text-[#6B6B6B]">
              We will announce our first artist and tease music
            </span>
          </div>
        </li>
        <li>
          <div className="px-3 -translate-y-2">
            Generation 1 Crate Mint
            <br />
            <span className="text-[#6B6B6B]">
              1,000 Gen 1 crates will be minted at 0.808 SOL / First 1,000 crate
              owners will be given the '808 Superfan' role
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
