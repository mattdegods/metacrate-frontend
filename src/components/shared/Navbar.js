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
      <div className="flex h-[64px] w-full shadow-md items-center bg-metacrateRed">
        {/* mobile menu icon */}
        <div className="flex lg:hidden ml-[20px] z-30">
          <div
            className="cursor-pointer p-2 ml-1 md:ml-4 min-w-[38px]"
            onClick={() => setOpen(!open)}
          >
            {MenuClosed}
          </div>
        </div>
        <div className="pt-2 ml-2">
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
        <div className="text-white flex items-center space-x-10 ml-auto mr-6 sm:mr-10 z-10">
          <div className="hidden lg:flex">
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </div>
          <div className="hidden lg:flex opacity-50 hover:cursor-not-allowed">
            {/* <Link href="/mint"> */}
              <a>MINT</a>
            {/* </Link> */}
          </div>
          <div className="hidden lg:flex">
            <Link href="/records">
              <a>MY RECORDS</a>
            </Link>
          </div>
          <div className="hidden lg:flex opacity-50 hover:cursor-not-allowed">
            {/* <Link href="/store"> */}
              <a>RECORD STORE</a>
            {/* </Link> */}
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
            className={`absolute flex flex-col space-y-[38px] h-full w-full 
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
            <div className="text-center text-metacrateWhite uppercase text-[40px] py-[10%]">
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
              <div className="text-metacrateWhite/40 mt-6">mint</div>
              <div className="my-6">
                <Link href="/records">
                  <a>my records</a>
                </Link>
              </div>
              <div className="text-metacrateWhite/40 mt-6">record store</div>
              <div className="lowercase text-metacrateWhite/40 text-body-md">
                (coming soon)
              </div>
            </div>
          </div>
          <div className="mx-auto mt-auto text-metacrateWhite">
            <Link href="/">
              <a>metacrate.com</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
