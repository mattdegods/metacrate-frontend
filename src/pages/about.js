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
        identity in the Metaverse.<br /><br />Meta Crate is the first music NFT platform
        for recording artists to release music in the Metaverse. Records will be
        regularly released to the community of crate owners with gamified
        ownership, listening parties, competitions, unique airdrops, artist
        activations and more. Only crate owners will be able to mint records
        while everyone else must purchase on the secondary markets.<br /><br />Solana is an
        alternative blockchain and cryptocurrency solution to the negative
        economic impact Ethereum has had on the environment.
      </div>
      <div className="w-full flex justify-center">
        {Arrow}
      </div>
    </div>
    {/* the roadmap */}
    <div>
    <div className="text-[32px] text-center uppercase">The Roadmap</div>
    </div>
  </div>
);

export default About;
