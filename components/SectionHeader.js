import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function SectionHeader({ title }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    console.log("section visible", inView);
  }, [inView]);

  const fadeOut = "translate-y-4 opacity-50";
  const fadeIn = "translate-y-0 opacity-100";

  return (
    <div
      id={title + "-section"}
      className={` transition-all ease-in-out bg-gradient-to-r from-yellow-400 dark:from-yellow-500 via-red-400 dark:via-red-500 to-pink-400 dark:to-pink-500 transform duration-200 h-24 shadow-inner`}
    >
      <div
        style={{
          backgroundImage: 'url("/bg-pattern.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className={`w-full content-center flex flex-col items-center justify-center transition-all transform duration-500 h-24 shadow-inner`}
      >
        <h1
          ref={ref}
          className={`capitalize font-extrabold text-white dark:text-black transition-all transform duration-500 text-5xl ${
            inView ? fadeIn : fadeOut
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default SectionHeader;
