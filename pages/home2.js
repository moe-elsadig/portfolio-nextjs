import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

function Home2({ projectData, featuredProjectData }) {
  let placeholderMobile = "/projects/placeholder-mobile.png";
  let placeholderMobileWC = "/projects/placeholder-mobile-wc.png";
  let placeholderDesktop = "/projects/placeholder-desktop.svg";

  const [mobileImgs, setMobileImgs] = useState([]);
  const [desktopImgs, setDesktopImgs] = useState([]);
  const [mobileImg, setMobileImg] = useState(placeholderMobile);
  const [desktopImg, setDesktopImg] = useState(placeholderDesktop);
  const [visibleProject, setVisibleProject] = useState(null);
  const [showTop, setShowTop] = useState("mobile");

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
    console.log(mobileImg);
    console.log(desktopImg);
    console.log("visible project: ", visibleProject);
    setMobileImg(mobileImgs[visibleProject]);
    setDesktopImg(desktopImgs[visibleProject]);
  }, [setMobileImg, setDesktopImg, visibleProject]);

  return (
    <div className="min-h-screen flex flex-col font-mono relative">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProfileCard />
      <main className="flex flex-col-reverse md:flex-row relative bg-gray-100 min-h-screen">
        <div className="bg-white w-full md:w-1/2 min-h-screen">
          {projectData?.map((project, index) => (
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
              />
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b from-white via-white md:to-white to-transparent backdrop-blur-lg sticky top-0 w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col">
          {/* <div className="py-2 flex flex-row justify-end">
          </div> */}
          {/* media container */}
          <div className="flex-grow">
            {/* background container */}
            <div className="absolute top-1/2 left-1/2">
              {/* <video
                // src="/projects/orange-blob.mp4"
                autoPlay
                loop
              >
                <source src="/projects/orange-blob.mp4" />
              </video> */}
            </div>

            {/* images container */}
            <div className=" h-full flex flex-col justify-between items-stretch">
              {/* mobile container */}

              {mobileImg && (
                <div className="m-auto h-full w-full relative transform transition-all ease-linear duration-500">
                  <div>
                    <Image
                      src={mobileImg}
                      layout="fill"
                      objectFit="contain"
                      alt="mobile screenshot"
                      className="transform transition-all ease-linear duration-500"
                    />
                  </div>
                </div>
              )}
              {/* desktop container */}
              {desktopImg && (
                <div className="m-auto h-full w-full relative self-end">
                  <div>
                    <Image
                      src={desktopImg}
                      layout="fill"
                      objectFit="contain"
                      alt="desktop screenshot"
                    />
                  </div>
                </div>
              )}
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

  console.log(projectData.length, featuredProjectData.length);

  return { props: { projectData, featuredProjectData } };
}
