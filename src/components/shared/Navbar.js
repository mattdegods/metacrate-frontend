import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// asset import
import MenuClosed from "./assets/MenuClosed";
import MenuOpen from "./assets/MenuOpen";

// import menu_open from "./Assets/menu_open.png";
// import menu_closed from "./Assets/menu_closed.png";
// import patch from "./Assets/Degods_hat_patch.png";
// import logo from "./Assets/degods_merch_logo.png";
// import profile from "./Assets/profile.png";
// import myCart from "./Assets/cart.png";

const NavBar = () => {

  // menu state
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* web menu */}
      <div className="flex h-[132px] w-full shadow-sm items-center">
        {/* mobile menu icon */}
        <div className="flex lg:hidden ml-[20px] mr-auto z-30">
          <div
            className="cursor-pointer p-2 ml-1 md:ml-4 min-w-[38px]"
            onClick={() => setOpen(!open)}
          >
            {MenuClosed}
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
          <a><Image src={logo} alt="DeGods Merch Logo" /></a>
          </Link>
        </div>
        {/* menu div */}
        <div className="flex items-center space-x-10 ml-auto sm:mr-[56px] mr-[20px] z-10">
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
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className={`lg:hidden bg-[#F6E1DC] flex items-start pb-6 
            transition-all ${open ? "opacity-100" : "opacity-0"} w-1/2
            overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 
            z-50 h-screen lg:inset-0 h-modal ml-0`}
          onClick={() => setOpen(false)}
        >
          <div
            className={`absolute flex flex-col space-y-[38px] h-full w-full 
            top-0 left-0 px-5 md:px-10`}
          >
            <div
              className="w-full h-[132px] items-center 
              flex flex-row justify-between"
            >
              <div className="flex mr-auto cursor-pointer">
                <Link href="https://www.degods.com/">
                  <a><Image
                    src={patch}
                    height="31px"
                    width="27px"
                    alt="DeGods Patch Logo"
                  /></a>
                </Link>
              </div>
              <div className="flex ml-auto cursor-pointer">
                {MenuOpen}
              </div>
            </div>
            <div>
              <a href="https://discord.gg/dedao" target="_blank" rel="noreferrer">
                Contact
              </a>
            </div>
            <div>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </div>
            {/* <div>
              <Link href="/track">
                <a>Track</a>
              </Link>
            </div> */}
            {/* <div className="pt-2">
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </div> */}
          </div>
          <div className="mx-auto mt-auto">
            <a
              href="https://www.degods.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md text-degodBlack/30"
            >
              degods.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;