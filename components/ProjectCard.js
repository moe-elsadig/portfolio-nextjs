import Image from "next/image";
import React, { useEffect, Suspense } from "react";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectCard({ project, index }) {
  return (
    <div
      className={`${br[0]} flex items-center justify-evenly m-2 mt-5 space-x-4 max-h-[50vh]`}
    >
      <div className={`${br[1]} flex-grow overflow-y-scroll`}>
        <div className="flex flex-row justify-between">
          <FolderOpenIcon className="h-6" />
          <AiOutlineGithub className="h-6" />
          <ExternalLinkIcon className="h-6" />
        </div>
        <h1>Project Title</h1>
        <p>
          left/bottomleft/bottomleft/bottomleft/bottomleft/bottom
          left/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottom
          left/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottomleft/bottom
        </p>
        <div>
          <p className="text-gray-400">Stack:</p>
          <div className="flex flex-row space-x-4">
            <p>Javascript</p>
            <p>React</p>
            <p>Material UI</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
      <div className={`${br[2]} relative h-[50vh] w-full flex-grow`}>
        {/* right/top */}
        <Image
          src="/mobile-placeholder.png"
          layout="fill"
          objectFit="contain"
          className={`${br[3]} rounded-3xl shadow-xl`}
        />
      </div>
      <div className={`${br[2]} relative h-[50vh] w-full flex-grow`}>
        {/* right/top */}
        <Image
          src="/desktop-placeholder.png"
          layout="fill"
          objectFit="contain"
          className={`${br[3]} rounded-3xl shadow-xl`}
        />
      </div>
    </div>
  );
}

const br = [
  "border border-yellow-300",
  "border border-green-300",
  "border border-blue-300",
  "border border-red-300",
];
