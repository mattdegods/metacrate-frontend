import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// asset import
import MenuClosed from "./assets/MenuClosed";
import MenuOpen from "./assets/MenuOpen";
import logo from "./assets/Logo.png";

const NavBar = () => {
  // menu state
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* web menu */}
      <div className="flex h-[75px] w-full shadow-sm items-center bg-metacrateRed">
        {/* mobile menu icon */}
        <div className="flex lg:hidden ml-[20px] z-30">
          <div
            className="cursor-pointer p-2 ml-1 md:ml-4 min-w-[38px]"
            onClick={() => setOpen(!open)}
          >
            {MenuClosed}
          </div>
        </div>
        <div className="pt-2">
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
        {/* menu div */}
        {/* <div className="flex items-center space-x-10 ml-auto sm:mr-[56px] mr-[20px] z-10">
          <div className="hidden lg:flex">
            <a href="https://discord.gg/dedao" target="_blank" rel="noreferrer">
              Contact
            </a>
          </div>
          <div className="hidden lg:flex">
            <Link href="/faq">
            <a>FAQ</a>
            </Link>
          </div>
        </div> */}

        {/* connect wallet button */}
        <div className="bg-[#B82628] text-metacrateWhite rounded-lg px-4 py-2 ml-auto mr-4">
          CONNECT
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
            className={`absolute flex flex-col space-y-[38px] h-full w-full 
            top-0 left-0 px-5 md:px-10`}
          >
            <div
              className="w-full h-[80px] px-3 items-center 
              flex flex-row justify-between"
            >
              {/* <div className="flex mr-auto cursor-pointer">
                <Link href="https://www.degods.com/">
                  <a><Image
                    src={patch}
                    height="31px"
                    width="27px"
                    alt="DeGods Patch Logo"
                  /></a>
                </Link>
              </div> */}
              <div
                className="flex ml-auto cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {MenuOpen}
              </div>
            </div>
            <div className="text-center text-metacrateWhite uppercase text-[40px] pt-20">
              <div className="my-6">
                <Link href="/about">
                  <a>about us</a>
                </Link>
              </div>
              <div className="my-6">
                <Link href="/mint">
                  <a>mint</a>
                </Link>
              </div>
              <div className="my-6">
                <Link href="/records">
                  <a>my records</a>
                </Link>
              </div>
              <div className="text-metacrateWhite/40 my-6">
                record store
                <span className="lowercase text-body-md">(coming soon)</span>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-auto">
            <a
              href="https://www.metacrate.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md text-metacrateWhite"
            >
              metacrate.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
