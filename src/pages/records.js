import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import Footer from "../components/Footer";
import NFTModal from "../components/shared/Collection/NFTModal";

// asset import
import shelves from "../components/shared/assets/shelves.png";
import single_shelf from "../components/shared/assets/single_shelf.png";
import myCrate from "../components/shared/assets/my_crate.png";

//solana wallet
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const recordData = [
  {
    title: "The Anthem",
    artist: "Capitol Order",
    image: "/images/vinyl1.svg",
    mp3: "sample1",
  },
  {
    title: "Don't Burn Me Out",
    artist: "Capitol Order",
    image: "/images/vinyl2.svg",
    mp3: "sample2",
  },
  {
    title: "Anything",
    artist: "Burn Wallstreet",
    image: "/images/vinyl2.svg",
    mp3: "sample3",
  },
  {
    title: "Yesterday",
    artist: "Staind",
    image: "/images/vinyl4.svg",
    mp3: "sample4",
  },
  {
    title: "Tomorrow",
    artist: "Mayday Parade",
    image: "/images/vinyl5.svg",
    mp3: "sample5",
  },
];

const Records = () => {
  //wallet variables
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const [showModal, setShowModal] = useState(false);

  const handleMenu = () => {
    // console.log(`You clicked ${title} by ${artist}!`)
    setShowModal(!showModal);
  };

  return (
    <div className="bg-gradient-to-b from-[#ff8e44] via-[#d83e40] to-[#35126a] min-h-screen overflow-x-hidden lg:max-h-screen">
      <NavBar />
      {publicKey ? (
        <div className="mt-8 w-full text-center lg:flex lg:flex-row-reverse lg:justify-evenly lg:align-top lg:px-10">
          <div className="lg:w-1/3 lg:h-screen">
            <div className="mt-10 py-6 px-20 lg:px-10 lg:mt-0 lg:py-0">
              <p className="text-[32px] uppercase text-metacrateWhite lg:pb-8">
                My Crate
              </p>
              <Image src={myCrate} layout="responsive" alt="Your Crate" />
            </div>
          </div>
          <div className="">
            <div className="text-[32px] uppercase text-metacrateWhite mt-6 py-6 lg:mt-0 lg:py-0 lg:pb-8">
              My Records
            </div>
            <div className="w-[60%] mx-auto text-center">
              <div className="flex flex-row flex-wrap justify-between">
                {/* <Image src={shelves} alt="empty shelves" /> */}
                {recordData.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="px-3 mb-6 sm:hover:cursor-pointer sm:hover:-translate-y-3 transition-transform ease-in-out" onClick={handleMenu}>
                      <Image src={item.image} height="80px" width="80px" alt="NFT album art" />
                    </div>
                    {/* modal window - music info / player */}
                    <div
                      className={`
                      mx-auto fixed inset-0 h-fit w-fit top-1/3 ${
                        showModal
                          ? "z-50 opacity-100 transition-opacity ease-in-out"
                          : "-z-10 opacity-0 transition-opacity ease-in-out"
                      }`}
                    >
                      <NFTModal
                        image={item.image}
                        artist={item.artist}
                        title={item.title}
                        handleMenu={handleMenu}
                        // mp3={item.mp3}
                      />
                    </div>
                    {/* render a shelf every odd index */}
                    {/* {index % 2 === 1 && ( */}
                    <div className="absolute bottom-4">
                      <Image src={single_shelf} alt="shelf" />
                    </div>
                    {/* )} */}
                  </div>
                ))}
                {/* <div className="absolute left-10 right-10">
                  <Image src={single_shelf} alt="shelf" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 mt-8 w-full text-center lg:hidden">
          <div className="mb-8">
            <div className="text-[28px] uppercase text-metacrateWhite mb-8 px-4">
              Connect your wallet to experience your collection!
            </div>
            <Image src={shelves} alt="empty shelves" />
          </div>
        </div>
      )}
      <div className="hidden lg:block fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Records;
