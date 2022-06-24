import Image from "next/image";
import Close from "../Close";

const Modal = ({ image, artist, title, mp3, handleMenu }) => {
  return (
    <div className="rounded-lg bg-white text-black p-6 mx-2 my-3">
      <div className="absolute top-6 right-6" onClick={() => {handleMenu()}}>
        <Close color="black" />
      </div>
      <Image src={image} width="250px" height="250px" alt="music NFT image" />
      <p>{`This is ${title} by ${artist}!`}</p>
    </div>
  ) 
}

export default Modal;