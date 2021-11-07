import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function TimelineEducationCard({ cardInfo, index, key }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    // console.log("education visible", inView);
  }, [inView]);

  const fadeOut = "translate-y-10 opacity-0";
  const fadeIn = "translate-y-0 opacity-100";

  let rightMarkup = cardInfo ? (
    <div
      id={"education-" + index}
      key={"education-" + index}
      ref={ref}
      className={`text-black dark:text-white relative z-10 transition-all transform duration-300 ${
        inView ? fadeIn : fadeOut
      }`}
    >
      <div className="timeline-img">
        <Image
          src={cardInfo ? cardInfo.institutionLogo : "/"}
          alt={cardInfo?.company + " logo"}
          // layout="fill"
          layout="responsive"
          height={24}
          width={24}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="timeline-container">
        <div className="timeline-pointer" aria-hidden="true"></div>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-md">
          <span className="font-bold text-indigo-400 dark:text-indigo-600 text-sm tracking-wide">
            {cardInfo?.dateStart} - {cardInfo?.dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{cardInfo?.course}</h1>
          <h2 className="text-lg font-semibold pt-1 text-gray-400 dark:text-gray-500">
            {cardInfo?.institution}
          </h2>
          <h3 className="text-md font-medium text-gray-300 dark:text-gray-600">
            {cardInfo?.location}
          </h3>
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  let leftMarkup = cardInfo ? (
    <div
      id={"education-" + index}
      ref={ref}
      className={`text-black dark:text-white relative z-10 transition-all transform duration-300 ${
        inView ? fadeIn : fadeOut
      }`}
      key={"education-" + index}
    >
      <div className="timeline-img">
        <Image
          src={cardInfo ? cardInfo.institutionLogo : "/"}
          alt={cardInfo?.company + " logo"}
          // layout="fill"
          layout="responsive"
          height={24}
          width={24}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="timeline-container timeline-container-left">
        <div
          className="timeline-pointer timeline-pointer-left"
          aria-hidden="true"
        ></div>
        <div className="bg-gray-50 dark:bg-gray-800  p-6 rounded-md shadow-md">
          <span className="font-bold text-indigo-400 dark:text-indigo-600  text-sm tracking-wide">
            {cardInfo?.dateStart} - {cardInfo?.dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{cardInfo?.course}</h1>
          <h2 className="text-lg font-semibold pt-1 text-gray-400 dark:text-gray-500">
            {cardInfo?.institution}
          </h2>
          <h3 className="text-md font-medium text-gray-300 dark:text-gray-600">
            {cardInfo?.location}
          </h3>
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  if ((index + 1) % 2) {
    return (
      <div className="px-10" key={key}>
        {rightMarkup}
      </div>
    );
  } else {
    return (
      <div className="px-10" key={key}>
        {leftMarkup}
      </div>
    );
  }

  // return <div>boom</div>;
}

export default TimelineEducationCard;
