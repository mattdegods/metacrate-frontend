import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// asset import
import MenuClosed from "./assets/MenuClosed";
import MenuOpen from "./assets/MenuOpen";
import logo from "./assets/Logo.png";
import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";

//solana wallet
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NavBar = () => {
  // menu state
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* web menu */}
      <div className="flex h-[64px] sm:h-[100px] w-full shadow-none items-center bg-metacrateRed">
        {/* mobile menu icon */}
        <div className="flex lg:hidden ml-[20px] z-30">
          <div
            className="cursor-pointer p-2 ml-1 md:ml-4 min-w-[38px] hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300"
            onClick={() => setOpen(!open)}
          >
            {MenuClosed}
          </div>
        </div>
        <div className="pt-2 ml-4 flex flex-row items-center">
          <div className="hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  width="48px"
                  height="48px"
                  alt="metacrate logo"
                />
              </a>
            </Link>
          </div>
          {/* social icons */}
          <div className="hidden sm:block hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <a href="discord.gg/dedao">
              <Image src={discord} height="60px" width="60px" alt="discord" />
            </a>
          </div>
          <div className="hidden sm:block hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <a href="twitter.com/metacrate">
              <Image src={twitter} height="60px" width="60px" alt="twitter" />
            </a>
          </div>
        </div>
        {/* menu div */}
        <div className="text-white flex items-center space-x-10 ml-auto mr-6 sm:mr-10 z-10">
          <div className="hidden lg:flex hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </div>
          <div className="hidden lg:flex hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <Link href="/records">
              <a>MY COLLECTION</a>
            </Link>
          </div>
          <div className="hidden lg:flex opacity-50 hover:cursor-not-allowed">
            {/* <Link href="/store"> */}
            <a>RECORD STORE</a>
            {/* </Link> */}
          </div>

          <div className="bg-[#B82628] rounded-lg w-fit z-40 hover:scale-105 hover:-translate-y-2 transition-transform ease-in-out duration-300">
            <WalletMultiButton className="wallet-adapter-button" />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className={`lg:hidden bg-metacrateRed flex items-start pb-6 
            transition-all ${open ? "opacity-100" : "opacity-0"} w-full
            overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0
            z-50 h-screen lg:inset-0 h-modal ml-0`}
        >
          <div
            className={`absolute flex flex-col justify-between h-full w-full 
            top-0 left-0 px-5 md:px-10`}
          >
            <div
              className="w-full h-[80px] px-3 items-center 
              flex flex-row justify-between"
            >
              <div
                className="flex ml-auto cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {MenuOpen}
              </div>
            </div>
            <div className="text-center text-metacrateWhite uppercase text-[40px] mb-8">
              <div className="my-6">
                <Link href="/">
                  <a>home</a>
                </Link>
              </div>
              <div className="my-6">
                <Link href="/about">
                  <a>about</a>
                </Link>
              </div>
              <div className="my-6">
                <Link href="/records">
                  <a>my collection</a>
                </Link>
              </div>
              <div className="text-metacrateWhite/40 mt-6">record store</div>
              <div className="lowercase text-metacrateWhite/40 text-body-md">
                (coming soon)
              </div>
              {/* mobile social icons */}
              <div className="flex flex-row justify-center pt-4 space-x-3">
                <div className="">
                  <a href="discord.gg/dedao">
                    <Image
                      src={discord}
                      height="80px"
                      width="80px"
                      alt="discord"
                    />
                  </a>
                </div>
                <div className="">
                  <a href="twitter.com/metacrate">
                    <Image
                      src={twitter}
                      height="80px"
                      width="80px"
                      alt="twitter"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto py-8 text-metacrateWhite">
              <Link href="/">
                <a>metacrate.com</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
