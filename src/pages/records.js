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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const recordData = [
  {
    title: "The Anthem",
    artist: "Capitol Order",
    image: "/images/vinyl1.svg",
    mp4: "/videos/test1.mp4",
  },
  {
    title: "Don't Burn Me Out",
    artist: "Capitol Order",
    image: "/images/vinyl2.svg",
    mp4: "/videos/test2.mp4",
  },
  {
    title: "Anything",
    artist: "Burn Wallstreet",
    image: "/images/vinyl2.svg",
    mp4: "/videos/test3.mp4",
  },
  {
    title: "Yesterday",
    artist: "Staind",
    image: "/images/vinyl4.svg",
    mp4: "/videos/test4.mp4",
  },
  {
    title: "Tomorrow",
    artist: "Mayday Parade",
    image: "/images/vinyl5.svg",
    mp4: "/videos/test5.mp4",
  },
];

const crateData = [
  {
    name: "Crate #69",
    image: "/images/my_crate.png",
  },
  // {
  //   name: "Crate #420",
  //   image: "/images/my_crate.png"
  // },
  // {
  //   name: "Crate #420",
  //   image: "/images/my_crate.png"
  // },
  // {
  //   name: "Crate #420",
  //   image: "/images/my_crate.png"
  // },
  // {
  //   name: "Crate #420",
  //   image: "/images/my_crate.png"
  // }
];

const Records = () => {
  //wallet variables
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const [showModal, setShowModal] = useState(false);
  const [activeNFT, setActiveNFT] = useState(1);

  const handleMenu = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-metal bg-cover min-h-screen overflow-x-hidden lg:max-h-screen">
      <NavBar />
      {publicKey ? (
        <div className="mt-12 w-full text-center lg:flex lg:flex-row-reverse lg:justify-evenly lg:align-top lg:px-10">
          <div className="lg:w-1/2 max-w-xl mt-10 pt-6 px-10 lg:mt-0 lg:py-0 mx-auto">
            <div className="bg-gradient-to-l from-[#ff8e44] via-[#d83e40] to-[#35126a] bg-clip-text text-[48px] uppercase text-transparent pb-8">
              Crate Collection
            </div>
            <div className="w-full">
              <div
                className={`flex flex-row flex-wrap ${
                  crateData.length === 1
                    ? "flex justify-center"
                    : "flex justify-between"
                }`}
              >
                {crateData.map((item, index) => (
                  <div className="relative" key={index}>
                    <div
                      className={`px-8 mb-6 sm:hover:-translate-y-3 transition-transform ease-in-out duration-500
                        ${crateData.length === 1 && "w-[400px]"}
                        ${
                          crateData.length > 1 &&
                          crateData.length <= 4 &&
                          "w-[200px]"
                        }
                        ${crateData.length > 4 && "w-[140px]"}
                        `}
                    >
                      <img src={item.image} alt="NFT album art" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* my records */}
          <div className="max-w-2xl mt-10 pt-6 px-10 lg:px-10 lg:mt-0 lg:py-0 mx-auto">
            <div className="bg-gradient-to-r from-[#ff8e44] via-[#d83e40] to-[#35126a] bg-clip-text text-[48px] uppercase text-transparent mt-6 py-6 lg:mt-0 lg:py-0 lg:pb-8">
              Record Collection
            </div>
            <div className="flex flex-row flex-wrap justify-between">
              {recordData.map((item, index) => (
                <div className="relative" key={index}>
                  <div
                    className="w-[110px] md:w-[150px] lg:[200px] mx-4 mb-6 sm:hover:cursor-pointer sm:hover:-translate-y-3 transition-transform ease-in-out duration-500"
                    onClick={() => {
                      setActiveNFT(index);
                      setShowModal(!showModal);
                    }}
                  >
                    <img
                      src={item.image}
                      style={{ width: "100%" }}
                      alt="NFT album art"
                    />
                  </div>
                  {/* render a shelf every odd index */}
                  {/* {index % 2 === 1 && ( */}
                  <div className="absolute bottom-1">
                    <Image src={single_shelf} alt="shelf" />
                  </div>
                  {/* )} */}
                </div>
              ))}
            </div>
            {/* modal window - music info / player */}
            <div
              className={`mx-auto fixed inset-0 h-fit w-fit top-[20%] 
                ${
                  showModal
                    ? "z-50 opacity-100 transition-opacity ease-in-out"
                    : "-z-10 opacity-0 transition-opacity ease-in-out"
                }
              `}
            >
              <NFTModal
                image={recordData[activeNFT].image}
                artist={recordData[activeNFT].artist}
                title={recordData[activeNFT].title}
                mp4={recordData[activeNFT].mp4}
                handleMenu={handleMenu}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center w-fit mx-auto lg:flex lg:flex-row-reverse lg:align-top lg:px-10">
          <div className="max-w-xl text-[28px] lg:text-[40px] uppercase text-transparent lg:pb-10 lg:ml-8 px-4 h-fit my-auto">
            <p className="bg-gradient-to-r from-[#ff8e44] via-[#d83e40] to-[#35126a] bg-clip-text">Connect your wallet to experience your collection!</p> 
            <div className="bg-[#B82628] my-8 rounded-lg w-fit mx-auto z-40 hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
              <WalletMultiButton className="wallet-adapter-button" />
            </div>
          </div>
          <div className="text-center lg:mr-8 max-w-xl">
            <Image src={shelves} alt="empty shelves" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;
