import React from "react";
import Image from "next/image";
import { DownloadIcon, ChevronDownIcon } from "@heroicons/react/outline";

// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
// } from "react-icons/ai";

function ProfileCard() {
  return (
    <div className="my-10 p-10 flex flex-col md:flex-wrap md:flex-row items-center mx-auto">
      <div className="w-64 h-64 md:w-128 md:h-128 rounded-full mx-auto relative  transition transform duration-200 ease-in-out hover:-skew-y-12 hover:scale-110 ">
        <Image
          src="/blob.svg"
          layout="fill"
          objectFit="cover"
          className="rounded-full m-5 p-5"
        />
        <Image
          src="/profile_photo-removebg.png"
          layout="fill"
          objectFit="cover"
          className="rounded-full m-5 p-5"
        />
      </div>
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semiboldtext-gray-500">
            "I love building well engineered solutions"
          </p>
        </blockquote>
        <figcaption className="font-small pt-10">
          <p className="text-gray-500">Moe Abdalla</p>
          <p className="text-sm">
            I'm a{" "}
            <span className="text-green-400 hover:animate-bounce">
              Mechatronics
            </span>{" "}
            Engineer and a{" "}
            <span className="text-yellow-500 hover:animate-bounce">
              Full-Stack
            </span>{" "}
            developer.
          </p>
        </figcaption>
      </div>
      <div className="pt-20 pb-28 items-center flex flex-col mx-auto space-y-5 min-w-full text-lg">
        <button className="flex flex-row gap-5 items-center">
          Resume <DownloadIcon className="h-5 w-5 text-blue-500" />
        </button>
        <button className="flex flex-row gap-5 items-center">
          Projects
          <ChevronDownIcon className="h-5 w-5 text-blue-500 animate-bounce" />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
