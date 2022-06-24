import React, { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import RecordNFT from "../components/shared/RecordNFT";
import Image from "next/image";
import shelves from "../components/shared/assets/shelves.png";

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
    image: "/images/vinyl3.svg",
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
  const [viewerOpen, setViewerOpen] = useState(false);

  const songViewer = () => {
    setViewerOpen(true);
    // make modal window visible containing song info
    console.log("Clicked: ");
  };

  return (
    <div className="bg-metacrateBlack min-h-screen">
      <div>
        <NavBar />
      </div>
      {/* mobile header */}
      <div className="py-8 mt-8 w-full text-center lg:hidden">
        <div className="text-[32px] uppercase text-metacrateWhite">
          My Records
        </div>
        <div className="w-[60%] mx-auto text-center border border-red-500">
          <div className="flex flex-row flex-wrap justify-between">
            {/* <Image src={shelves} alt="empty shelves" /> */}
            {recordData.map((item, index) => (
              <div className="px-3 mb-6" key={index} onClick={songViewer}>
                <RecordNFT
                  image={item.image}
                  artist={item.artist}
                  title={item.title}
                  mp3={item.mp3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
