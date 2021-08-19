import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import AnimatedBG from "../components/AnimatedBG";

export default function Home({ projectData }) {
  console.log("projectData", projectData.length);
  const [projectsData, setProjectsData] = useState({});

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectsData(data);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-mono overflow-x-hidden">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProfileCard />
      <main className="">
        {projectData?.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </main>

      <footer className="border-t mx-10">
        <p className="text-sm text-gray-400">
          Designed & Developed by <span className="text-yellow-400">M</span>
          <span className="text-red-400">o</span>
          <span className="text-pink-400">e</span>
          <span className="text-green-400">.</span>
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch("https://links.papareact.com/pyp").then(
  //   (res) => res.json()
  // );

  // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
  //   res.json()
  // );

  const projectData = [];
  const placeholderText = "Lorem ispum. ";

  const limit = 20;
  for (let i = 0; i < limit; i++) {
    projectData.push({
      title: `Portfolio Site - NextJs version-${i}`,
      description:
        "This is a personal porfolio site built with NextJs on React and styled with the help of Tailwind.",
      stack: ["NextJs", "TailwindCSS", "ReactJS", "Hero-Icons", "React-Icons"],
      media: {
        mobile: {
          images: i % 3 ? ["/mobile-placeholder.png"] : [],
          videos: [],
        },
        desktop: {
          images: i % 2 ? ["/desktop-placeholder.png"] : [],
          videos: [],
        },
      },
    });

    if (i + 1 === limit) return { props: { projectData } };
  }
}
