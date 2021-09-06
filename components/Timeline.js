import React from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const data = [
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

function Timeline() {
  let rightMarkup = ({
    company,
    companyLogo,
    location,
    dateStart,
    dateEnd,
    position,
    description,
  }) => (
    <div className="relative z-10" key={position}>
      <div className="timeline-img">
        <Image
          src={companyLogo}
          alt={company + " logo"}
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
            {dateStart} - {dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{position}</h1>
          <h2 className="text-lg font-semibold text-gray-300">
            {company} - {location}
          </h2>
          {description.map((item, index) => (
            <p key={item} className="pt-1 flex flex-row items-center space-x-2">
              <VscDebugBreakpointLog className="h-2" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  let leftMarkup = ({
    company,
    companyLogo,
    location,
    dateStart,
    dateEnd,
    position,
    description,
  }) => (
    <div className="relative z-10" key={position}>
      <div className="timeline-img">
        <Image
          src={companyLogo}
          alt={company + " logo"}
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
            {dateStart} - {dateEnd}
          </span>
          <h1 className="text-xl font-bold pt-1">{position}</h1>
          <h2 className="text-lg font-semibold text-gray-300">
            {company} - {location}
          </h2>
          {description.map((item, index) => (
            <p key={item} className="pt-1 flex flex-row items-center space-x-2">
              <VscDebugBreakpointLog className="h-2" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div className="container mx-auto p-6 my-6 relative flex flex-col space-y-8 bg-white">
      <div className="absolute w-2 max-h-full shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0 bg-gradient-to-b from-red-400 via-blue-400 to-purple-400 rounded-xl"></div>
      {/* container */}

      {data.map((employment, index) => {
        if ((index + 1) % 2) {
          return rightMarkup(employment);
        } else {
          return leftMarkup(employment);
        }
      })}
    </div>
  );
}

export default Timeline;
