import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import { HiColorSwatch } from "react-icons/hi";

function Header({ setAccentColor }) {
  const [menu, setMenu] = useState(false);
  const colors = ["red", "pink", "blue", "yellow"];
  const [color, setColor] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-40 shadow-md flex flex-row justify-between justify-items-center h-[80px] items-center backdrop-blur-sm bg-gradient-to-b from-white via-white to-transparent">
      <div className="pl-5 flex flex-row">
        <h1 className=" text-2xl cursor-pointer" onClick={() => scrollToTop()}>
          Moe.
        </h1>
      </div>
      <div className="hidden md:inline-flex md:max-w-[100px]">
        {/* <Image alt=''
          src="/vercel.svg"
          width="100"
          height="100"
          // layout="fill"
          objectFit="contain"
        /> */}
        <HiColorSwatch
          className={` text-2xl text-${colors[color]}-500 cursor-pointer`}
          onClick={() => {
            const nextColor = (color + 1) % colors.length;
            setColor(nextColor);
            setAccentColor(colors[nextColor]);
          }}
        />
      </div>
      <div className="pr-5">
        <div className="hidden space-x-4 justif md:inline-flex">
          <button className={`${buttonStyle}`}>Home</button>
          <button className={`${buttonStyle}`}>Resume</button>
          <button className={`${buttonStyle}`}>Projects</button>
          <button className={`${buttonStyle}`}>About</button>
          <button className={`${buttonStyle}`}>Contact</button>
        </div>
        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          Menu
        </button>
        <div
          style={{
            visibility: menu ? "visible" : "hidden",
            scale: menu ? 1 : 0.5,
          }}
          className="absolute z-51 top-0 left-0 h-screen w-screen bg-gray-400 opacity-50"
          onClick={() => setMenu(false)}
        />
        <div
          style={{
            visibility: menu ? "visible" : "hidden",
          }}
          className="md:hidden flex flex-col space-y-4 justify-start z-52 absolute top-0 right-0 bg-gradient-to-r from-transparent via-pink-800 to-red-900 p-10 text-white text-lg transition transform ease-in-out duration-200 min-h-screen items-end"
        >
          <button className={`${buttonStyle}`} onClick={() => setMenu()}>
            <XIcon className={`h-10 mx-auto animate-pulse`} />
          </button>
          <button className={`${buttonStyle}`}>Home</button>
          <button className={`${buttonStyle}`}>Resume</button>
          <button className={`${buttonStyle}`}>Projects</button>
          <button className={`${buttonStyle}`}>About</button>
          <button className={`${buttonStyle}`}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

// const buttonStyle = "rounded-lg p-4 ring-4 ring-pink-300 ring-inset";
const buttonStyle = "rounded-xl p-2";
