import React from "react";
import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiChevronUp,
} from "react-icons/fi";

function ContactCard() {
  return (
    <div className="h-full w-full bg-gray-100 dark:bg-gray-700">
      <div
        id="profile-card"
        className="px-10 max-w-screen-2xl my-0 pt-10 flex flex-col sm:flex-row md:flex-wrap md:flex-row items-center justify-center mx-auto bg-white dark:bg-[#101010]"
      >
        <div className="w-64 h-64 md:w-128 md:h-128 rounded-full mx-auto relative transition transform duration-200 ease-in-out hover:scale-110 hover:shadow-md">
          <Image
            alt=""
            src="/blob.svg"
            layout="fill"
            objectFit="cover"
            className="rounded-full m-5 p-5"
          />
          <Image
            alt=""
            src="/profile_photo-removebg.png"
            layout="fill"
            objectFit="cover"
            className="rounded-full m-5 p-5"
          />
        </div>
        <div className="pt-20 pb-28 items-center flex flex-col mx-auto space-y-5 text-lg text-black dark:text-white">
          <div className="flex flex-row items-center space-x-4">
            <FiMail className="h-5 w-5 text-red-400 dark:text-red-500" />
            <h3>Email:</h3>
            <h3>
              <a
                className="text-red-400 dark:text-red-500 flex cursor-pointer"
                href="mailto:moe@abdalla.dev"
              >
                moe@abdalla.dev
              </a>
            </h3>
          </div>
          <a
            href="https://github.com/moe-elsadig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-5 items-center cursors-pointer"
          >
            <h3>Github</h3>
            <FiGithub className="h-5 w-5 text-red-400 dark:text-red-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/moe-elsadig/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-5 items-center cursors-pointer"
          >
            <h3>LinkedIn</h3>
            <FiLinkedin className="h-5 w-5 text-red-400 dark:text-red-500" />
          </a>
          <a
            href="/M.Abdalla - 1 Page Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-5 items-center cursors-pointer"
          >
            <h3>Resume</h3>
            <FiDownload className="h-5 w-5 text-red-400 dark:text-red-500" />
          </a>
          <button
            className="flex flex-row gap-5 items-center"
            onClick={() => scrollToProjects()}
          >
            Projects
            <FiChevronUp className="h-5 w-5 text-red-400 dark:text-red-500 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
