import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import TimelineWorkCard from "./TimelineWorkCard";
import TimelineEducationCard from "./TimelineEducationCard";

const workData = [
  {
    dateStart: "July 2019",
    dateEnd: "Present",
    position: "Founder/Developer",
    company: "Sai eServices",
    location: "Khartoum, SD",
    companyLogo: "/work/sai-logo.png",
    description: [
      "Founded and developed a local eCommerce platform aimed at improving and empowering entrepreneurs in a unique national economic landscape, alSa3i.coms",
    ],
    relatedProjects: [],
  },
  {
    dateStart: "May 2018",
    dateEnd: "Jul 2019",
    position: "AUYVC/Data & Systems Admin.",
    company: "African Union Commission",
    location: "Addis Ababa, ET",
    companyLogo: "/work/auc-logo.png",
    description: [
      "Responsible for the Data, Systems and Integrated Geoportal of the Project Mgmt. Team of GMES & Africa",
      "Lead the early development of the project’s platforms (Web platform, eLearning, GeoPortal, Forum)",
      "Admin for IT related matters of the program as an ICT Expert",
    ],
    relatedProjects: [],
  },
  {
    dateStart: "Oct 2017",
    dateEnd: "Jan 2019",
    position: "Independent Consulting",
    company: "Udacity",
    location: "Remote, US",
    companyLogo: "/work/udacity-logo.png",
    description: [
      "I utilized my specialized knowledge in the fields of Android Development (Java) & Self-Driving (autonomous) Cars and my strong communication skills to provide project reviews, code reviews and other student support services",
      ,
    ],
    relatedProjects: [],
  },
  {
    dateStart: "Sep 2014",
    dateEnd: "Dec 2014",
    position: "Electrical/Mechanical Design (Intern)",
    company: "Alfaid Engineering",
    location: "Amman, JO",
    companyLogo: "/work/meco-logo.jpeg",
    description: [
      "Designed full electrical schematics and assisted with mechanical schematics for residential buildings",
      ,
    ],
    relatedProjects: [],
  },
  {
    dateStart: "Sep 2012",
    dateEnd: "Dec 2012",
    position: "Maintenance Eng. (Intern)",
    company: "Petronas Sudan",
    location: "Khartoum, SD",
    companyLogo: "/work/petronas-logo.jpg",
    description: [
      "Administered the full setup and initialization of a computerised maintenance management system",
      ,
    ],
    relatedProjects: [],
  },
];

const educationData = [
  {
    dateStart: "Jan 2019",
    dateEnd: "May 2019",
    course: "Full Stack Web Developer Nanodegree",
    institution: "Udacity",
    location: "Remote, US",
    institutionLogo: "/work/udacity-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "Nov 2016",
    dateEnd: "Oct 2017",
    course: "Self Driving Car Engineer Nanodegree",
    institution: "Udacity",
    location: "Remote, US",
    institutionLogo: "/work/udacity-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "TBA",
    dateEnd: "TBA",
    course: "MSc Renewable Energy",
    institution: "University of Jordan",
    location: "Amman, JO",
    institutionLogo: "/education/ju-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "Jun 2016",
    dateEnd: "Jul 2016",
    course: "Android Basics Nanodegree",
    institution: "Udacity",
    location: "Remote, US",
    institutionLogo: "/work/udacity-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "Jan 2010",
    dateEnd: "Dec 2015",
    course: "BEng (Hons) Mechatronics Engineering",
    institution: "UCSI University",
    location: "Kuala Lumpur, MY",
    institutionLogo: "/education/ucsi-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "Jan 2010",
    dateEnd: "Dec 2010",
    course: "Science Foundation",
    institution: "UCSI University",
    location: "Kuala Lumpur, MY",
    institutionLogo: "/education/ucsi-logo.png",
    relatedProjects: [],
  },
  {
    dateStart: "Sep 2007",
    dateEnd: "May 2008",
    course: "IGCSE/O-Levels",
    institution: "Unity Highschool",
    location: "Khartoum, SD",
    institutionLogo: "/education/uhs-logo.jpg",
    relatedProjects: [],
  },
];

function Timeline({ timelineType = "work" }) {
  const [showMore, setShowMore] = useState(false);

  const scrollToFirst = () => {
    let elId = timelineType + "-0";
    const el = document.getElementById(elId);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  let itemData = timelineType === "work" ? workData : educationData;

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-screen-2xl mx-auto py-10 relative flex flex-col space-y-8 bg-white dark:bg-black">
        <div className="absolute w-2 max-h-full shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0 bg-gradient-to-b from-red-400 via-yellow-400 to-purple-400 rounded-xl my-5"></div>
        {/* container */}

        {itemData.slice(0, 1).map((item, index) => {
          if (timelineType === "work") {
            return <TimelineWorkCard cardInfo={item} index={index} />;
          } else return <TimelineEducationCard cardInfo={item} index={index} />;
        })}

        {showMore &&
          itemData.slice(1).map((item, index) => {
            if (timelineType === "work") {
              return <TimelineWorkCard cardInfo={item} index={index + 1} />;
            } else
              return (
                <TimelineEducationCard cardInfo={item} index={index + 1} />
              );
          })}
        {itemData.length > 1 && (
          <button
            onClick={() => {
              setShowMore(!showMore);
              scrollToFirst();
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
