import Image from "next/image";
import React, { useEffect, Suspense, useState } from "react";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

export default function ProjectCard({
  project: { title, description, stack, media },
  project,
  accentColor,
  index,
}) {
  return (
    <div
      className={`${br[0]} flex flex-col md:flex-row items-center justify-evenly m-4 mt-5 space-x-4 md:max-h-[50vh] p-5 border-b border-${accentColor}-100 transition duration-300 ease-out bg-white bg-gradient-to-r from-white via-white to-white hover:to-${accentColor}-300 hover:shadow-md hover:rounded-lg`}
    >
      <div className={`${br[1]} flex-grow overflow-y-scroll`}>
        <div className="flex flex-row justify-between">
          <FolderOpenIcon
            className={`h-6 cursor-pointer hover:text-${accentColor}-400 hover:scale-105`}
          />
          <AiOutlineGithub
            className={`h-6 cursor-pointer hover:text-${accentColor}-400 hover:scale-105`}
          />
          <ExternalLinkIcon
            className={`h-6 cursor-pointer hover:text-${accentColor}-400 hover:scale-105`}
          />
        </div>
        <h1 className={`text-lg text-${accentColor}-400`}>{title}</h1>
        <p>{description}</p>
        <div>
          <p className={`text-${accentColor}-300`}>Stack:</p>
          <div className="flex flex-row flex-wrap justify- space-x-4 ">
            {stack?.map((tech, index) => (
              <p
                key={tech}
                className={`cursor-pointer hover:text-${accentColor}-400 hover:scale-105`}
              >
                {tech}
                <span className={`text-${accentColor}-300`}>
                  {index + 1 < stack.length ? "/" : ""}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {media?.mobile.images.length > 0 && (
        <div className={`${br[2]} relative h-[45vh] w-full flex-grow`}>
          {media?.mobile.images.map((image, index) => (
            <Image
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={`${br[3]}`}
            />
          ))}
        </div>
      )}
      {media?.desktop.images.length > 0 && (
        <div className={`${br[2]} relative h-[45vh] w-full flex-grow`}>
          {media?.desktop.images.map((image, index) => (
            <Image
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={`${br[3]}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const br = [
  // "border border-yellow-300",
  // "border border-green-300",
  // "border border-blue-300",
  // "border border-red-300",
];
