import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import TimelineWorkCard from "./TimelineWorkCard";
import TimelineEducationCard from "./TimelineEducationCard";

function Timeline({ timelineType = "work", cardData }) {
  const [showMore, setShowMore] = useState(false);

  // const scrollToFirst = () => {
  //   let elId = timelineType + "-0";
  //   const el = document.getElementById(elId);
  //   el.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // };

  // let cardData = timelineType === "work" ? workData : educationData;

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-700">
      <div className="w-full max-w-screen-2xl mx-auto py-10 relative flex flex-col space-y-8 bg-white dark:bg-[#101010]">
        <div className="absolute w-2 max-h-full shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0 bg-gradient-to-b from-red-400 via-yellow-400 to-purple-400 rounded-xl my-5"></div>
        {/* container */}

        {cardData?.length > 1 && showMore && (
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="flex items-center self-start md:self-center py-2 z-10  shadow-md px-4 rounded-md backdrop-blur-lg text-black dark:text-white"
          >
            Show {showMore ? "less" : "more"}{" "}
            {showMore ? (
              <MdExpandLess className=" text-red-400" />
            ) : (
              <MdExpandMore className=" text-red-400" />
            )}
          </button>
        )}
        {cardData?.slice(0, 1).map((item, index) => {
          if (timelineType === "work") {
            return (
              <TimelineWorkCard
                cardInfo={item}
                index={index}
                key={item.title}
                priorityImages={true}
              />
            );
          } else
            return (
              <TimelineEducationCard
                cardInfo={item}
                index={index}
                key={item.title}
                priorityImages={true}
              />
            );
        })}

        {showMore &&
          cardData?.slice(1).map((item, index) => {
            if (timelineType === "work") {
              return (
                <TimelineWorkCard
                  cardInfo={item}
                  index={index + 1}
                  key={item.title}
                />
              );
            } else
              return (
                <TimelineEducationCard
                  cardInfo={item}
                  index={index + 1}
                  key={item.title}
                />
              );
          })}
        {cardData?.length > 1 && (
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="flex items-center self-start md:self-center py-2 z-10  shadow-md px-4 rounded-md backdrop-blur-lg text-black dark:text-white"
          >
            Show {showMore ? "less" : "more"}{" "}
            {showMore ? (
              <MdExpandLess className=" text-red-400" />
            ) : (
              <MdExpandMore className=" text-red-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Timeline;
