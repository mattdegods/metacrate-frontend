import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../components/shared/Navbar";
import RecordNFT from "../components/shared/Collection/RecordNFT";
import shelves from "../components/shared/assets/shelves.png";

//solana wallet
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

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

  return (
    <div className="bg-metacrateBlack min-h-screen relative">
      <NavBar />
      <div className="bg-[#B82628] rounded-lg w-fit z-40 absolute top-2 right-4">
        <WalletMultiButton className="wallet-adapter-button" />
      </div>
      {/* mobile */}
      {publicKey ? (
        <div className="py-8 mt-8 w-full text-center lg:hidden">
          <div className="mb-8">
            <div className="text-[32px] uppercase text-metacrateWhite mb-8">
              My Records
            </div>
            <div className="w-[60%] mx-auto text-center border border-red-500">
              <div className="flex flex-row flex-wrap justify-between">
                {/* <Image src={shelves} alt="empty shelves" /> */}
                {recordData.map((item, index) => (
                  <div className="px-3 mb-6 hover:cursor-pointer" key={index}>
                    <RecordNFT
                      image={item.image}
                      artist={item.artist}
                      title={item.title}
                      // mp3={item.mp3}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[32px] uppercase text-metacrateWhite mb-8">
              My Crate
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
    </div>
  );
};

export default Records;
