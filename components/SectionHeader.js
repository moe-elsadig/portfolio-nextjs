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

  const fadeOut = "translate-y-10 opacity-0 text-xl";
  const fadeIn = "translate-y-0 opacity-100 text-5xl";
  const fadeOut2 = "h-0";
  const fadeIn2 = "h-24";

  return (
    <div
      className={` transition-all ease-in-out bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 transform duration-300 ${
        inView ? fadeIn2 : fadeOut2
      }`}
    >
      <div
        style={{
          backgroundImage: 'url("/bg-pattern.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className={`h-full w-full content-center flex flex-col items-center justify-center transition-all transform duration-300 ${
          inView ? fadeIn2 : fadeOut2
        }`}
      >
        <h1
          ref={ref}
          className={`font-extrabold text-white transition-all transform duration-300 ${
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
