import Image from "next/image";

const RecordNFT = ({ image, artist, title, mp3 }) => {

  // a record NFT component will be composed of data 
  // coming from the NFT in the user's wallet:
    // 1. cover art
    // 2. artist name, song name
    // 3. mp3 of song

  const handleClick = () => {
    console.log(`You clicked ${title} by ${artist}!`)
  }

  return (
    <>
      <div className="w-fit h-fit shadow-lg" onClick={handleClick}>
        <Image src={image} width="80px" height="80px" alt="NFT" />
      </div>
    </>
  );
};

export default RecordNFT;