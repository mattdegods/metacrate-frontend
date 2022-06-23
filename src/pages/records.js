import NavBar from "../components/shared/Navbar";
import Image from "next/image";
import shelves from "../components/shared/assets/shelves.png";

const Records = () => {
  return (
    <div className="bg-metacrateBlack min-h-screen">
      <div>
        <NavBar />
      </div>
      {/* mobile header */}
      <div className="py-8 mt-8 w-full text-center lg:hidden">
        <div className="text-[32px] uppercase text-metacrateWhite">My Records</div>
        <div className="my-8 px-10">
          <Image src={shelves} alt="empty shelves" />
        </div>
        {/* <div className="pb-3 text-left text-[14px] sm:text-[20px] px-10 sm:px-20">
          Every Artist can have a second life; we're here to break Artists from
          the confines of their existing brand and label by offering them a new
          identity in the Metaverse.
          <br />
          <br />
          Meta Crate is the first music NFT platform for recording artists to
          release music in the Metaverse. Records will be regularly released to
          the community of crate owners with gamified ownership, listening
          parties, competitions, unique airdrops, artist activations and more.
          Only crate owners will be able to mint records while everyone else
          must purchase on the secondary markets.
          <br />
          <br />
          Solana is an alternative blockchain and cryptocurrency solution to the
          negative economic impact Ethereum has had on the environment.
        </div> */}
      </div>
    </div>
  );
};

export default Records;
