import Image from "next/image";
import Close from "../Close";
import ReactPlayer from "react-player";

const NFTModal = ({ image, artist, title, rarity, mp4, handleMenu }) => {

  return (
    <div className="rounded-xl bg-metacrateRed text-metacrateWhite px-20 py-8 max-w-xl max-h-xl shadow-xl shadow-black/60">
      <div
        className="absolute top-8 right-8 hover:cursor-pointer"
        onClick={() => {
          handleMenu();
        }}
      >
        <Close color="white" />
      </div>
      <p className="text-xl pt-8">Artist Name:{" "}{artist}</p>
      <p className="pb-8 text-lg">Song Title:{" "}{title}</p>
      {/* <Image src={image} width="179px" height="179px" alt="music NFT image" /> */}
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player fixed-bottom"
          url={mp4}
          width="100%"
          height="100%"
          controls={true}
          loop={false}
          playing={false}
        />
      </div>
      <p className="pt-8">Rarity:{" "}{rarity}</p>
    </div>
  );
};

export default NFTModal;
