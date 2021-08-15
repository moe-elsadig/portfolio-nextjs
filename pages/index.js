import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";

export default function Home({ projectData }) {
  console.log("projectData", projectData);
  return (
    <div className="min-h-screen flex flex-col font-mono ">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* profile card */}
      <ProfileCard />
      <main className="">
        {projectData?.map((project) => (
          <ProjectCard project={project} />
        ))}
      </main>

      <footer className="border-t mx-10">
        <p className="text-sm text-gray-400">Designed & Developed by Moe.</p>
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

  for (let i = 0; i < 50; i++) {
    projectData.push({
      title: `project no. ${i}`,
      description: placeholderText.repeat(i),
    });
  }

  return { props: { projectData } };
}
