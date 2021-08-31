import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import { FiYoutube } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";

function Home2({ projectData, featuredProjectData }) {
  let image1 = "/projects/test.svg";
  let image2 = "/projects/alsa3i-mobile-bordered.png";
  let image3 = "/projects/altulumba-mobile-3.png";
  let image4 = "/projects/placeholder-mobile.png";
  let image5 = "/projects/placeholder-mobile-wc.png";
  let image6 = "/projects/placeholder-desktop.svg";
  let mobileVsector = "/projects/mobile-vector.svg";
  let another = "/projects/another.svg";

  const [mobileImg, setMobileImg] = useState(image4);
  const [showTop, setShowTop] = useState("mobile");

  let changed = false;

  useEffect(() => {
    return;
  }, [mobileImg]);

  if (!changed) {
    setTimeout(() => {
      setMobileImg(image5);
      changed = true;
    }, 3000);
  }

  let mobileImages = [];
  let desktopImages = [];

  // projectData?.forEach(({ media }, index) => {
  //   console.log("m res:", mobileImages);
  //   mobileImages = mobileImages.concat(
  //     media?.mobile.images.length > 0 ? media?.mobile.images : [""]
  //   );
  //   console.log("d res:", desktopImages);
  //   desktopImages = desktopImages.concat(
  //     media?.desktop.images.length > 0 ? media?.desktop.images : [""]
  //   );
  // });

  // const handleScroll = () => {
  //   console.log("scrolling");
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <div className="min-h-screen flex flex-col font-mono relative">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
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
              />
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b from-white via-white md:to-white to-transparent backdrop-blur-md sticky top-0 w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col">
          <div className="py-2 flex flex-row justify-end">
            <button
              onClick={() => setShowTop("mobile")}
              className="px-2 rounded-full "
              disabled
            >
              <FiYoutube
                className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
              />
            </button>
            <button
              onClick={() => setShowTop("desktop")}
              className="px-2 rounded-full "
              disabled
            >
              <IoImagesOutline
                className={`h-6 cursor-pointer hover:text-red-400 hover:scale-105`}
              />
            </button>
          </div>
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
              <div className="m-auto h-full w-full  relative">
                <div>
                  <Image src={image5} layout="fill" objectFit="contain" />
                </div>
              </div>
              {/* desktop container */}
              <div className="m-auto h-full w-full  relative self-end">
                <div>
                  <Image src={image6} layout="fill" objectFit="contain" />
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

  console.log(projectData.length, featuredProjectData.length);

  return { props: { projectData, featuredProjectData } };
}
