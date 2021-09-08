import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Timeline from "../components/Timeline";
import SectionHeader from "../components/SectionHeader";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function Home({ projectData, featuredProjectData }) {
  const [accentColor, setAccentColor] = useState("red");
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

  return (
    <div className="min-h-screen flex flex-col font-mono relative">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setAccentColor={setAccentColor} />
      <ProfileCard />
      <SectionHeader title="projects" />
      <main className="relative bg-gray-100 antialiased">
        {projectData?.slice(0, 1).map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            accentColor={accentColor}
          />
        ))}

        {showMore &&
          projectData
            ?.slice(1)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 1}
                accentColor={accentColor}
              />
            ))}

        <div className="pb-10 bg-white flex flex-col">
          {/* <SectionHeader title="Projects" /> */}
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
      </main>
      <SectionHeader title="work" />
      <Timeline timelineType="work" />
      <SectionHeader title="education" />
      <Timeline timelineType="education" />

      <footer className="border-t mx-10">
        <p className="text-sm text-gray-400">
          Designed & Developed by <span className="text-red-400">M</span>
          <span className="text-red-400">o</span>
          <span className="text-red-400">e</span>
          <span className="text-red-400">.</span>
        </p>
      </footer>
    </div>
  );
}

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
