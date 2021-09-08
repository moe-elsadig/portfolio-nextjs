import React, { useEffect } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";

function TimelineEducationCard({ cardInfo, index }) {
  let rightMarkup = cardInfo ? (
    <div
      id={"education-" + index}
      className="relative z-10"
      key={cardInfo?.course}
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
        <div className="bg-white p-6 rounded-md shadow-md">
          <span className="font-bold text-indigo-400 text-sm tracking-wide">
            {cardInfo?.dateStart} - {cardInfo?.dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{cardInfo?.course}</h1>
          <h2 className="text-lg font-semibold pt-1 text-gray-400">
            {cardInfo?.institution}
          </h2>
          <h3 className="text-md font-medium text-gray-300">
            {cardInfo?.company} - {cardInfo?.location}
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
      className="relative z-10"
      key={cardInfo?.course}
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
        <div className="bg-white p-6 rounded-md shadow-md">
          <span className="font-bold text-indigo-400 text-sm tracking-wide">
            {cardInfo?.dateStart} - {cardInfo?.dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{cardInfo?.course}</h1>
          <h2 className="text-lg font-semibold pt-1 text-gray-400">
            {cardInfo?.institution}
          </h2>
          <h3 className="text-md font-medium text-gray-300">
            {cardInfo?.company} - {cardInfo?.location}
          </h3>
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  if ((index + 1) % 2) {
    return rightMarkup;
  } else {
    return leftMarkup;
  }

  // return <div>boom</div>;
}

export default TimelineEducationCard;
