import Image from "next/image";
import Close from "../Close";

const Modal = ({ image, artist, title, mp3, handleMenu }) => {
  return (
    <div className="rounded-xl bg-metacrateRed text-metacrateWhite px-12 py-8 mx-2 my-3 z-50">
      <div className="absolute top-8 right-8" onClick={() => {handleMenu()}}>
        <Close color="white" />
      </div>
      <p>{title}</p>
      <Image src={image} width="179px" height="179px" alt="music NFT image" />
      <p className="font-extrabold">{artist}</p>
    </div>
  ) 
}

export default Modal;