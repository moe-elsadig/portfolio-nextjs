import Image from "next/image";
import React, { useEffect, Suspense } from "react";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectCard({
  project: { title, description, stack, media },
  project,
  index,
}) {
  return (
    <div
      className={`${br[0]} flex flex-col md:flex-row items-center justify-evenly m-2 mt-5 space-x-4 md:max-h-[50vh] `}
    >
      <div className={`${br[1]} flex-grow overflow-y-scroll`}>
        <div className="flex flex-row justify-between">
          <FolderOpenIcon className="h-6 cursor-pointer hover:text-green-400 hover:scale-105" />
          <AiOutlineGithub className="h-6 cursor-pointer hover:text-green-400 hover:scale-105" />
          <ExternalLinkIcon className="h-6 cursor-pointer hover:text-green-400 hover:scale-105" />
        </div>
        <h1 className="text-lg text-green-400">{title}</h1>
        <p>{description}</p>
        <div>
          <p className="text-green-300">Stack:</p>
          <div className="flex flex-row flex-wrap justify- space-x-4 ">
            {stack?.map((tech, index) => (
              <p
                key={tech}
                className="cursor-pointer hover:text-green-400 hover:scale-105"
              >
                {tech}
                <span className="text-green-300">
                  {index + 1 < stack.length ? "/" : "."}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {media?.mobile.images.length > 0 && (
        <div className={`${br[2]} relative h-[50vh] w-full flex-grow`}>
          {media?.mobile.images.map((image, index) => (
            <Image
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={`${br[3]} rounded-3xl shadow-xl`}
            />
          ))}
        </div>
      )}
      {media?.desktop.images.length > 0 && (
        <div className={`${br[2]} relative h-[50vh] w-full flex-grow`}>
          {media?.desktop.images.map((image, index) => (
            <Image
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={`${br[3]} rounded-3xl shadow-xl`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const br = [
  "border border-yellow-300",
  "border border-green-300",
  "border border-blue-300",
  "border border-red-300",
];
