import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import { DownloadIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { HiOutlineDownload } from "react-icons/hi";

export default function Home({ projectData, featuredProjectData }) {
  const [accentColor, setAccentColor] = useState("red");

  return (
    <div className="min-h-screen flex flex-col font-mono relative">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setAccentColor={setAccentColor} />
      <ProfileCard />
      <main className="relative bg-gray-100">
        {/* {featuredProjectData?.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            accentColor={accentColor}
          />
        ))}
        <button className="flex flex-row gap-5 items-center mx-auto py-10 bg-white px-5 rounded-md">
          Show All Projects{" "}
          <HiOutlineDownload className="h-5 w-5 text-blue-500" />
        </button> */}
        {projectData?.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            accentColor={accentColor}
          />
        ))}
      </main>

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
