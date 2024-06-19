import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Timeline from "../components/Timeline";
import SectionHeader from "../components/SectionHeader";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ContactCard from "../components/ContactCard";

export default function Home({
    projectData,
    featuredProjectData,
    workData,
    educationData,
}) {
    const [accentColor, setAccentColor] = useState("red");
    const [showMore, setShowMore] = useState(false);

    return (
        <div
            className={`min-h-screen flex flex-col font-mono relative text-black dark:text-white bg-gray-100 dark:bg-gray-700`}
        >
            <Head>
                <title>Moe&#39;s Portfolio</title>
                <meta
                    name="description"
                    content="Welcome, I'm Moe, and this is my portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="theme-color"
                    content="#EF4444"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    name="theme-color"
                    content="#374151"
                    media="(prefers-color-scheme: dark)"
                />
            </Head>
            <Header />
            <ProfileCard />
            <SectionHeader title="work" />
            <Timeline timelineType="work" cardData={workData} />
            <SectionHeader title="education" />
            <Timeline timelineType="education" cardData={educationData} />
            <SectionHeader title="projects" />
            <section className="relative bg-gray-100 dark:bg-gray-700 antialiased">
                {projectData?.slice(0, 3).map((project, index) => (
                    <ProjectCard
                        priorityImages={true}
                        key={project.title}
                        project={project}
                        index={index}
                        accentColor={accentColor}
                    />
                ))}

                {showMore &&
                    projectData
                        ?.slice(3)
                        .map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index + 3}
                                accentColor={accentColor}
                            />
                        ))}

                <div className="max-w-screen-2xl mx-auto pb-10 bg-white dark:bg-[#101010] flex flex-col">
                    {/* <SectionHeader title="Projects" /> */}
                    {projectData.length > 1 && (
                        <button
                            onClick={() => {
                                setShowMore(!showMore);
                            }}
                            className="flex flex-grow items-center self-start md:self-center py-2 z-10 shadow-md px-4 rounded-md backdrop-blur-lg text-black dark:text-white"
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
            </section>
            <SectionHeader title="contact" />
            <ContactCard />
            <footer className="border-t bg-gray-100 dark:bg-gray-700">
                <p className="max-w-screen-2xl text-sm text-gray-400 dark:text-gray-500 px-10 pt-10 mx-auto bg-white dark:bg-[#101010]">
                    Designed & Developed by{" "}
                    <span className="text-red-400 dark:text-red-500">M</span>
                    <span className="text-red-400 dark:text-red-500">o</span>
                    <span className="text-red-400 dark:text-red-500">e</span>
                    <span className="text-red-400 dark:text-red-500">.</span>
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
            console.error("unable to fetch project data");
            return null;
        });

    const workData = await fetch(projectDataURL + "/api/workData")
        .then((res) => res.json())
        .catch((err) => {
            console.error("unable to fetch project data");
            return null;
        });

    const educationData = await fetch(projectDataURL + "/api/educationData")
        .then((res) => res.json())
        .catch((err) => {
            console.error("unable to fetch project data");
            return null;
        });

    return {
        props: { projectData, featuredProjectData, workData, educationData },
    };
}
