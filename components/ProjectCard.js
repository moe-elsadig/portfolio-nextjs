import Image from "next/image";
import React, { useEffect, Suspense, useState, useRef } from "react";
import { throttle } from "lodash";

// icons
import { FolderOpenIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { FiYoutube } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";

export default function ProjectCard({
  project: { title, description, stack, media, dependencies },
  project,
  accentColor,
  index,
  noImages,
  setVisibleProject,
  visibleProject,
  fullScreen,
}) {
  const cardRef = useRef(null);
  const [accent, setAccent] = useState("red");
  const [theme, setTheme] = useState("light");
  const [showDependencies, setShowDependencies] = useState(false);
  const [showJson, setShowJson] = useState(false);

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

  const handleScroll = () => {
    // console.log("scrolling", cardRef.current.id);
    // a functions to check if the banner is in view with an offset and banner height to correct for animation bugs
    function isVisible(el, offset) {
      if (el) {
        return el.getBoundingClientRect().top + offset > 0 &&
          el.getBoundingClientRect().top + offset < window.innerHeight
          ? true
          : false;
      } else {
        return false;
      }
    }

    if (isVisible(cardRef.current, window.innerHeight / 3)) {
      if (setVisibleProject && visibleProject !== index) {
        setVisibleProject(index);
        // console.log(
        //   cardRef.current.id,
        //   isVisible(cardRef.current, window.innerHeight / 3)
        // );
      }
    }
  };

  useEffect(() => {
    const handleScrollThrottled = throttle(handleScroll, 600);
    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  return (
    <div
      ref={cardRef}
      id={"project" + index}
      className={`flex flex-col md:flex-row items-center justify-evenly m-4 mt-5 space-x-4 ${
        fullScreen && "pb-[30vh]"
      } min-h-[50vh] p-5 transition duration-300 ease-out bg-white dark:bg-black dark:text-white hover:shadow-md hover:rounded-sm max-w-screen-2xl mx-auto border-b`}
    >
      <div className="flex flex-row justify-between pb-5 w-full md:flex-col md:w-auto md:space-y-5 md:items-center md:pr-4 md:border-r">
        <FolderOpenIcon
          className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
        />
        <AiOutlineGithub
          onClick={() => {
            if (project.repo) window.open(`${project.repo}`);
          }}
          className={`h-6 cursor-pointer text-2xl ${
            !project.repo ? "text-gray-100" : ""
          } hover:text-red-400 hover:scale-105`}
        />
        <ExternalLinkIcon
          onClick={() => {
            if (project.demo) window.open(`${project.demo}`);
          }}
          className={`h-6 cursor-pointer text-2xl ${
            !project.demo ? "text-gray-100" : ""
          } hover:text-red-400 hover:scale-105`}
        />
        {process.env.NODE_ENV !== "production" && (
          <VscJson
            onClick={() => setShowJson(!showJson)}
            className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
          />
        )}
        {media.mobile.videos.length > 0 && (
          <FiYoutube
            onClick={() => {
              window.open(`${media.mobile.videos[0]}`);
            }}
            className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
          />
        )}
        {media.desktop.videos.length > 0 && (
          <FiYoutube
            onClick={() => {
              window.open(`${media.desktop.videos[0]}`);
            }}
            className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
          />
        )}
        {/* <IoImagesOutline
          className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
        /> */}
      </div>
      <div className={`flex-grow`}>
        <h1 className={`text-lg text-red-400`}>{title}</h1>
        <p className="pt-2 pl-2">{description}</p>
        <div>
          <p className={`text-gray-400 pt-4`}>Stack:</p>
          <div className="flex flex-row flex-wrap justify-start pl-2 space-x-4 ">
            {stack?.map((tech, index) => (
              <p
                key={tech}
                className={`cursor-pointer hover:text-red-400 hover:scale-105`}
              >
                <span className={`text-red-400`}>{tech}</span>
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
                All Dependencies ({dependencies.length})
                <IoIosArrowDropdown
                  className={`h-6 cursor-pointer text-lg hover:text-red-400 hover:scale-105`}
                />
              </button>
              <div
                className={`${showDependencies ? "visible" : "hidden"} pl-5`}
              >
                {dependencies?.map((dependency, index) => (
                  <p
                    key={dependency}
                    className={`cursor-pointer text-sm text-red-400 hover:pl-4 over:pl-4`}
                  >
                    {dependency}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {!noImages && media?.mobile.images.length > 0 && (
        <div className={`relative h-[45vh] w-full flex-grow `}>
          {media?.mobile.images.map((image, index) => (
            <Image
              alt="mobile screenshot"
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={``}
            />
          ))}
        </div>
      )}
      {!noImages && media?.desktop.images.length > 0 && (
        <div className={`relative h-[45vh] w-full flex-grow`}>
          {media?.desktop.images.map((image, index) => (
            <Image
              alt="desktop screenshot"
              key={image}
              src={image}
              layout="fill"
              objectFit="contain"
              className={``}
            />
          ))}
        </div>
      )}
      {showJson && (
        <div className="overflow-x-scroll overflow-y-scroll">
          <pre>{JSON.stringify(project, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
