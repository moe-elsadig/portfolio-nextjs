import React from "react";
import Image from "next/image";
// import { DownloadIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { HiOutlineDownload, HiChevronDown } from "react-icons/hi";
import TravelGlobe from "./TravelGlobe";

// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
// } from "react-icons/ai";

function ProfileCard() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects-section");
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-full bg-gray-100 dark:bg-gray-700">
      <div
        id="profile-card"
        className="px-10 max-w-screen-2xl my-0 pt-10 flex flex-col md:flex-wrap md:flex-row items-center justify-center mx-auto bg-white dark:bg-[#101010]"
      >
        {/* <div className="absolute z-0 right-[-150px]">
          <TravelGlobe dimensions={400} />
        </div> */}
        <div className="z-10">
          <div className="w-64 h-64 md:w-128 md:h-128 rounded-full mx-auto relative transition transform duration-200 ease-in-out hover:scale-110 hover:shadow-md">
            <Image
              alt=""
              src="/blob.svg"
              layout="fill"
              objectFit="cover"
              className="rounded-full m-5 p-5 z-10"
            />
            <Image
              alt=""
              src="/profile_photo-removebg.png"
              layout="fill"
              objectFit="cover"
              className="rounded-full m-5 p-5 z-10"
            />
          </div>
        </div>
        <div className="pt-6 text-center space-y-4 z-10">
          <blockquote>
            <p className="text-lg font-semibold text-black dark:text-white">
              {'"'}I love building well engineered solutions{'"'}
            </p>
          </blockquote>
          <figcaption className="font-small pt-10">
            <p className="text-gray-400 dark:text-gray-500">Moe Abdalla,</p>
            <p className="text-sm text-black dark:text-white">
              a{" "}
              <span className="text-green-400 dark:text-green-500 hover:animate-bounce">
                Mechatronics
              </span>{" "}
              Engineer and a{" "}
              <span className="text-yellow-400 dark:text-yellow-500 hover:animate-bounce">
                Full-Stack
              </span>{" "}
              developer.
            </p>
          </figcaption>
        </div>
        <div className="pt-20 pb-28 items-center flex flex-col mx-auto space-y-5 min-w-full text-lg text-black dark:text-white">
          <a
            href="/Moe Resume - General.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-5 items-center cursors-pointer"
          >
            <h3>Resume</h3>
            <HiOutlineDownload className="h-5 w-5 text-red-400 dark:text-red-500" />
          </a>
          <button
            className="flex flex-row gap-5 items-center"
            onClick={() => scrollToProjects()}
          >
            Projects
            <HiChevronDown className="h-5 w-5 text-red-400 dark:text-red-500 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
