import { XIcon } from "@heroicons/react/outline";
import { throttle } from "lodash";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";

function Header({ setAccentColor }) {
  const [menu, setMenu] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [showBar, setShowBar] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHome = () => {
    const el = document.getElementById("profile-card");
    el.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setMenu(false);
  };

  const scrollToWork = () => {
    const el = document.getElementById("work-0");
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setMenu(false);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("project0");
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setMenu(false);
  };

  const scrollToEducation = () => {
    const el = document.getElementById("education-0");
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setMenu(false);
  };

  let prevPos = 0;

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;

    // console.log(prevPos, currentScrollPos);
    if (prevPos > currentScrollPos) {
      // hide
      prevPos = currentScrollPos;
      setShowBar(false);
      // console.log("bar", showBar);
    } else {
      // show
      prevPos = currentScrollPos;
      setShowBar(true);
      // console.log("bar", showBar);
    }
  };

  useEffect(() => {
    const handleScrollThrottled = throttle(handleScroll, 200);
    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  let buttonsMarkup = (
    <>
      <button className={`${buttonStyle}`} onClick={() => scrollToHome()}>
        Home
      </button>
      <button className={`${buttonStyle}`} onClick={() => scrollToWork()}>
        Work
      </button>
      <button className={`${buttonStyle}`}>Resume</button>
      <button className={`${buttonStyle}`} onClick={() => scrollToProjects()}>
        Projects
      </button>
      <button className={`${buttonStyle}`} onClick={() => scrollToEducation()}>
        Education
      </button>
      <button className={`${buttonStyle}`}>Contact</button>
    </>
  );
  return (
    <Headroom className="z-50">
      <div className="sticky top-0 z-50 shadow-md flex flex-row justify-between justify-items-center h-[40px] items-center backdrop-blur-lg ">
        <div className="pl-5 flex flex-row">
          <h1
            className=" text-2xl cursor-pointer"
            onClick={() => scrollToTop()}
          >
            Moe.
          </h1>
        </div>
        <div className="hidden md:inline-flex md:max-w-[100px]">
          <Image
            alt=""
            src="/logo_small_black.svg"
            width="40"
            height="40"
            // layout="fill"
            objectFit="contain"
            className=" text-2xl cursor-pointer"
            onClick={() => scrollToTop()}
          />
        </div>
        <div className="pr-5">
          <div className="hidden space-x-4 justify-center md:inline-flex">
            {buttonsMarkup}
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
            className="md:hidden flex flex-col space-y-4 justify-start z-52 fixed top-0 right-0 bg-gradient-to-r from-transparent via-pink-400 to-indigo-400 p-10 text-white text-lg transition transform ease-in-out duration-200 min-h-screen items-end"
          >
            <button className={`${buttonStyle}`} onClick={() => setMenu()}>
              <XIcon className={`h-10 mx-auto animate-pulse`} />
            </button>
            {buttonsMarkup}
          </div>
        </div>
      </div>
    </Headroom>
  );
}

export default Header;

// const buttonStyle = "rounded-lg p-4 ring-4 ring-pink-300 ring-inset";
const buttonStyle = "rounded-xl p-2";
