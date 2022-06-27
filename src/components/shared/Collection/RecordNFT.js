import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./Modal";

const RecordNFT = ({ image, artist, title, mp3 }) => {

  // a record NFT component will be composed of data 
  // coming from the NFT in the user's wallet:
    // 1. cover art
    // 2. artist name, song name
    // 3. mp3 of song

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    // console.log(`You clicked ${title} by ${artist}!`)
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="w-fit h-fit shadow-lg" onClick={handleClick}>
        <Image src={image} width="80px" height="80px" alt="NFT" />
      </div>
      <div className={`absolute top-1/3 ${showModal ? 'z-40 opacity-100 transition-opacity ease-in-out' : '-z-10 opacity-0 transition-opacity ease-in-out'}`}>
        <Modal 
          artist={artist} 
          title={title} 
          image={image} 
          handleMenu={handleClick} 
        />
      </div>
    </>
  );
};

export default RecordNFT;