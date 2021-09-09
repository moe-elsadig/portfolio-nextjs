import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Timeline from "../components/Timeline";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

function Home2({ projectData, featuredProjectData, workData, educationData }) {
  let placeholderMobile = "/projects/placeholder-mobile.png";
  let placeholderMobileWC = "/projects/placeholder-mobile-wc.png";
  let placeholderDesktop = "/projects/placeholder-desktop.svg";

  const [mobileImgs, setMobileImgs] = useState([]);
  const [desktopImgs, setDesktopImgs] = useState([]);
  const [mobileImg, setMobileImg] = useState(placeholderMobile);
  const [desktopImg, setDesktopImg] = useState(placeholderDesktop);
  const [visibleProject, setVisibleProject] = useState(null);
  const [showTop, setShowTop] = useState("mobile");
  const [showMore, setShowMore] = useState(false);

  const scrollToFirst = () => {
    let elId = "project0";
    const el = document.getElementById(elId);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    let mobileImages = [];
    let desktopImages = [];
    projectData?.forEach(({ media }, index) => {
      mobileImages = mobileImages.concat(
        media?.mobile.images.length > 0 ? media?.mobile.images : [""]
      );
      desktopImages = desktopImages.concat(
        media?.desktop.images.length > 0 ? media?.desktop.images : [""]
      );
      // console.log(
      //   "m/d/t:",
      //   mobileImages.length,
      //   "/",
      //   desktopImages.length,
      //   "/",
      //   projectData.length
      // );
      if (index + 1 === projectData.length) {
        setMobileImgs(mobileImages);
        setDesktopImgs(desktopImages);
        setMobileImg(mobileImages[0]);
        setDesktopImg(desktopImages[0]);
      }
    });
    return;
  }, [projectData]);

  useEffect(() => {
    // console.log(mobileImg);
    // console.log(desktopImg);
    // console.log("visible project: ", visibleProject);
    setMobileImg(mobileImgs[visibleProject]);
    setDesktopImg(desktopImgs[visibleProject]);
  }, [setMobileImg, setDesktopImg, visibleProject, mobileImgs, desktopImgs]);

  return (
    <div className="min-h-screen flex flex-col font-mono relative">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProfileCard />
      <SectionHeader title="Education" />
      <Timeline timelineType="education" cardData={educationData} />
      <SectionHeader title="Work" />
      <Timeline timelineType="work" cardData={workData} />
      <SectionHeader title="Projects" />
      <main className="flex flex-col-reverse md:flex-row relative bg-gray-100 min-h-screen">
        <div className="bg-white w-full md:w-1/2 min-h-screen">
          {projectData?.slice(0, 1).map((project, index) => (
            <div
              key={project.title}
              className={`smin-h-[50vh] md:min-h-screen flex flex-row justify-items-stretch items-center`}
            >
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                accentColor={"red"}
                noImages={true}
                setVisibleProject={setVisibleProject}
                visibleProject={visibleProject}
                fullScreen={true}
              />
            </div>
          ))}

          {showMore &&
            projectData
              ?.slice(1)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + 1}
                  accentColor={"red"}
                  noImages={true}
                  setVisibleProject={setVisibleProject}
                  visibleProject={visibleProject}
                  fullScreen={true}
                />
              ))}

          <div className="pb-10 bg-white flex flex-col">
            <SectionHeader title="Projects" />
            {projectData.length > 1 && (
              <button
                onClick={() => {
                  setShowMore(!showMore);
                  scrollToFirst();
                }}
                className="flex flex-grow items-center self-start md:self-center py-2 z-10  shadow-md px-4 rounded-md backdrop-blur-lg"
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
        <div className="bg-white shadow-md to-transparent backdrop-blur-lg sticky top-0 w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col">
          {/* <div className="py-2 flex flex-row justify-end">
          </div> */}

          <video
            src="/projects/orange-blob.mp4"
            allow="autoPlay"
            autoPlay
            loop
            muted
            playsInline
            type="video/mp4"
            className={`h-full w-full p-10 m-auto absolute top-0 ${
              visibleProject !== null
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            } transform ease-in-out transition-all duration-100`}
          />
          {/* media container */}
          <div className="flex-grow z-10">
            {/* images container */}
            <div className=" h-full flex flex-col justify-between items-stretch">
              {/* mobile container */}
              <div
                className={`transform ease-in-out transition-all duration-100 ${
                  mobileImg
                    ? " opacity-100 h-full w-full"
                    : " opacity-0 h-0 w-0"
                } m-auto  relative`}
              >
                <div>
                  <Image
                    src={"/projects/placeholder-mobile.svg"}
                    layout="fill"
                    objectFit="contain"
                    alt="mobile placeholder"
                    className=""
                  />
                  {mobileImg && (
                    <Image
                      src={mobileImg}
                      layout="fill"
                      objectFit="contain"
                      alt="mobile screenshot"
                      className=""
                    />
                  )}
                </div>
              </div>
              {/* no images message */}
              {!mobileImg && !desktopImg && (
                <h2 className={`text-gray-200 m-auto`}>
                  No previews at the moment.
                </h2>
              )}
              {/* desktop container */}
              <div
                className={`transform ease-in-out transition-all duration-100 m-auto ${
                  desktopImg
                    ? " opacity-100 h-full w-full"
                    : " opacity-0 h-0 w-0"
                } relative self-end`}
              >
                <div>
                  <Image
                    src={"/projects/placeholder-desktop.svg"}
                    layout="fill"
                    objectFit="contain"
                    alt="desktop placeholder"
                    className=""
                  />
                  {desktopImg && (
                    <Image
                      src={desktopImg}
                      layout="fill"
                      objectFit="contain"
                      alt="desktop screenshot"
                      className=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ProfileCard />
    </div>
  );
}

export default Home2;

export async function getServerSideProps() {
  const NODE_ENV = process.env.NODE_ENV;
  // production url
  let projectDataURL = "https://portfolio-nextjs-psi.vercel.app";

  if (NODE_ENV === "development") {
    projectDataURL = "http://localhost:3000";
  }

  const [projectData, featuredProjectData] = await fetch(
    projectDataURL + "/api/projectData"
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log("unable to fetch project data");
      return null;
    });

  const workData = await fetch(projectDataURL + "/api/workData")
    .then((res) => res.json())
    .catch((err) => {
      console.log("unable to fetch project data");
      return null;
    });

  console.log(projectData.length, featuredProjectData.length, workData.length);

  return { props: { projectData, featuredProjectData, workData } };
}
