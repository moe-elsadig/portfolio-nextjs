import Image from "next/image";
import React, { useEffect, Suspense, useState } from "react";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

export default function ProjectCard({
  project: { title, description, stack, media, dependencies },
  project,
  accentColor,
  index,
}) {
  const [accent, setAccent] = useState("red");

  useEffect(() => {
    setAccent(accentColor);
    return;
  }, [accentColor]);

  return (
    <div
      id={"project" + index}
      className={`${br[0]} flex flex-col md:flex-row items-center justify-evenly m-4 mt-5 space-x-4 md:max-h-[50vh] p-5 border-b first:border-t border-${accent}-100 transition duration-300 ease-out bg-white bg-gradient-to-r from-white via-white to-white hover:to-${accent}-400 hover:shadow-md hover:rounded-sm`}
    >
      <div className={`${br[1]} flex-grow overflow-y-scroll`}>
        <div className="flex flex-row justify-between">
          <FolderOpenIcon
            className={`h-6 cursor-pointer hover:text-${accent}-400 hover:scale-105`}
          />
          <AiOutlineGithub
            className={`h-6 cursor-pointer hover:text-${accent}-400 hover:scale-105`}
          />
          <ExternalLinkIcon
            className={`h-6 cursor-pointer hover:text-${accent}-400 hover:scale-105`}
          />
        </div>
        <h1 className={`text-lg text-${accent}-400`}>{title}</h1>
        <p className="pt-2 pl-2">{description}</p>
        <div>
          <p className={`text-gray-400 pt-4`}>Stack:</p>
          <div className="flex flex-row flex-wrap justify-start pl-2 space-x-4 ">
            {stack?.map((tech, index) => (
              <p
                key={tech}
                className={`cursor-pointer hover:text-${accent}-400 hover:scale-105`}
              >
                <span className={`text-${accent}-400`}>{tech}</span>
                {index + 1 < stack.length ? "/" : ""}
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
