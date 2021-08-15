import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-40 shadow-md flex flex-row justify-between justify-items-center h-[80px] items-center backdrop-blur-sm bg-gradient-to-b from-white via-white to-transparent">
      <div className="pl-5">
        <h1 className=" text-2xl cursor-pointer" onClick={() => scrollToTop()}>
          Moe.
        </h1>
      </div>
      <div className="hidden md:inline-flex md:max-w-[100px]">
        <Image
          src="/vercel.svg"
          width="100"
          height="100"
          // layout="fill"
          objectFit="contain"
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
          className="absolute z-51 top-0 left-0 h-screen w-screen bg-gray-400 opacity-30"
          onClick={() => setMenu(false)}
        />
        <div
          style={{
            visibility: menu ? "visible" : "hidden",
          }}
          className="flex flex-col space-y-4 justif z-52 absolute top-0 right-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 rounded-xl text-white text-lg transition transform ease-out duration-200 md:hidden"
        >
          <button className={`${buttonStyle}`} onClick={() => setMenu()}>
            Close
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
const buttonStyle = "rounded-lg p-4 ";
