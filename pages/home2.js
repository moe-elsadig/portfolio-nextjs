import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

function Home2({ projectData, featuredProjectData }) {
  let image1 = "/projects/test.svg";
  let image2 = "/projects/alsa3i-mobile-bordered.png";
  let image3 = "/projects/altulumba-mobile-3.png";
  let image4 = "/projects/f1.png";
  let image5 = "/projects/f2.png";
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

  let [mobileImages, desktopImages] = projectData?.map(({ media }, index) => {
    console.log("media:", media.mobile.images);
    return media.mobile, media.desktop;
  });
  console.log("m res:", mobileImages);
  console.log("d res:", desktopImages);
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
              className={`smin-h-[50vh] md:min-h-screen flex flex-row justify-items-stretch items-center`}
            >
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                accentColor={"red"}
              />
            </div>
          ))}
        </div>
        <div className="bg-white sticky top-0 w-full md:w-1/2 h-[50vh] md:h-screen">
          <div className="flex flex-col-2 justify-around">
            <button
              onClick={() => setShowTop("mobile")}
              className="px-2 rounded-full bg-red-200"
            >
              mobile
            </button>
            <button
              onClick={() => setShowTop("desktop")}
              className="px-2 rounded-full bg-red-200"
            >
              desktop
            </button>
          </div>
          <div className="h-full md:h-screen relative">
            <div className="max-w-full max-h-full">
              {showTop !== "desktop" && (
                <Image
                  alt=""
                  key={"phone"}
                  src={"/projects/desktop-vector.svg"}
                  layout="fill"
                  objectFit="contain"
                  className={`sticky top-0`}
                />
              )}
              <Image
                alt=""
                key={"phone2"}
                src={mobileImg}
                layout="fill"
                objectFit="contain"
                className={``}
              />
              {showTop === "desktop" && (
                <Image
                  alt=""
                  key={"phone"}
                  src={"/projects/desktop-vector.svg"}
                  layout="fill"
                  objectFit="contain"
                  className={`sticky top-0`}
                />
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
