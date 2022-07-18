import Image from "next/image";
import Close from "../Close";
import ReactPlayer from "react-player";

const NFTModal = ({ image, artist, title, mp4, handleMenu }) => {

  return (
    <div className="rounded-xl bg-metacrateRed text-metacrateWhite px-20 py-8 max-w-lg max-h-lg shadow-xl shadow-black/60">
      <div
        className="absolute top-8 right-8 hover:cursor-pointer"
        onClick={() => {
          handleMenu();
        }}
      >
        <Close color="white" />
      </div>
      <p className="pb-8 text-2xl">{title}</p>
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
      <p className="font-extrabold pt-8">{artist}</p>
    </div>
  );
};

export default NFTModal;
