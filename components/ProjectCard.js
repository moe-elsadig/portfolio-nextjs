import Image from "next/image";
import React, { useEffect, Suspense, useState } from "react";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { IoIosArrowDropdown } from "react-icons/io";

export default function ProjectCard({
  project: { title, description, stack, media, dependencies },
  project,
  accentColor,
  index,
}) {
  const [accent, setAccent] = useState("red");
  const [theme, setTheme] = useState("light");
  const [showDependencies, setShowDependencies] = useState(false);

  useEffect(() => {
    let color = "red";
    let theme = "light";
    if (index % 2) {
      color = "green";
    } else {
      color = "red";
    }
    setAccent(color);
    setTheme(theme);
    return;
  }, [accentColor]);

  const themeShade = (number = 200) => {
    const lightToDark = {
      50: 900,
      100: 800,
      200: 700,
      300: 600,
      400: 500,
      500: 400,
      600: 300,
      700: 200,
      800: 100,
      900: 50,
    };
    if (theme === "light") return number;
    else return lightToDark[number];
  };

  return (
    <div
      id={"project" + index}
      className={`${br[0]} flex flex-col md:flex-row items-center justify-evenly m-4 mt-5 space-x-4 md:max-h-[50vh] p-5 border-b first:border-t border-${accent}-100 transition duration-300 ease-out bg-white dark:bg-black hover:shadow-md hover:rounded-sm max-w-screen-2xl mx-auto`}
    >
      <div className="flex flex-row justify-between pb-5 w-full md:flex-col md:w-auto md:space-y-5 md:items-center md:pr-4 md:border-r">
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
      <div className={`${br[1]} flex-grow`}>
        <h1 className={`text-lg text-${accent}-400`}>{title}</h1>
        <p className="pt-2 pl-2">{description}</p>
        <div>
          <p className={`text-gray-400 pt-4`}>Stack:</p>
          <div className="flex flex-row flex-wrap justify-start pl-2 space-x-4 ">
            {stack?.map((tech, index) => (
              <p
                key={tech}
                className={`cursor-pointer hover:text-${accent}-${themeShade(
                  400
                )} hover:scale-105`}
              >
                <span className={`text-${accent}-400`}>{tech}</span>
                {index + 1 < stack.length ? "/" : ""}
              </p>
            ))}
          </div>
          {dependencies && (
            <div>
              <button
                className="flex text-gray-400 pt-4"
                onClick={() => setShowDependencies(!showDependencies)}
              >
                All Dependencies
                <IoIosArrowDropdown
                  className={`h-6 cursor-pointer text-lg hover:text-${accent}-400 hover:scale-105`}
                />
              </button>
              <div
                className={`${showDependencies ? "visible" : "hidden"} pl-5`}
              >
                {dependencies.map((dependency, index) => (
                  <p
                    key={dependency}
                    className={`cursor-pointer text-sm hover:text-${accent}-${themeShade(
                      400
                    )} hover:scale-105`}
                  >
                    {dependency}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {media?.mobile.images.length > 0 && (
        <div className={`${br[2]} relative h-[45vh] w-full flex-grow`}>
          {media?.mobile.images.map((image, index) => (
            <Image
              alt=""
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
              alt=""
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
