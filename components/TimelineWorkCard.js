import React, { useEffect } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";

function TimelineWorkCard({ cardInfo, index, cardType }) {
  let rightMarkup = cardInfo ? (
    <div
      id={"work-" + index}
      className="relative z-10"
      key={cardInfo?.position}
    >
      <div className="timeline-img">
        <Image
          src={cardInfo ? cardInfo.companyLogo : "/"}
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
          <h1 className="text-xl font-bold pt-1">{cardInfo?.position}</h1>
          <h2 className="text-lg font-semibold text-gray-300">
            {cardInfo?.company} - {cardInfo?.location}
          </h2>
          {cardInfo?.description.map((item, index) => (
            <p key={item} className="pt-1 flex flex-row items-center space-x-2">
              <VscDebugBreakpointLog className="h-2" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  let leftMarkup = cardInfo ? (
    <div
      id={"work-" + index}
      className="relative z-10"
      key={cardInfo?.position}
    >
      <div className="timeline-img">
        <Image
          src={cardInfo ? cardInfo.companyLogo : "/"}
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
          <h1 className="text-xl font-bold pt-1">{cardInfo?.position}</h1>
          <h2 className="text-lg font-semibold text-gray-300">
            {cardInfo?.company} - {cardInfo?.location}
          </h2>
          {cardInfo?.description?.map((item, index) => (
            <p key={item} className="pt-1 flex flex-row items-center space-x-2">
              <VscDebugBreakpointLog className="h-2" />
              {item}
            </p>
          ))}
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

export default TimelineWorkCard;
