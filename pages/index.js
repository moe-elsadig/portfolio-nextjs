import { getProjectData } from "./api/projectData";
import { getWorkData } from "./api/workData";
import { getEducationData } from "./api/educationData";

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
                <title>
                    Moe Abdalla | Mohammed E. B. Abdalla | Full-Stack Developer,
                    Renewable Energy & Mechatronics Engineer
                </title>
                <meta
                    name="description"
                    content="Welcome to the portfolio of Mohammed E. B. Abdalla, also known as Moe Abdalla. Explore projects in renewable energy, software development, and more."
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



// ⚡ Bolt Performance Optimization: Changed from getServerSideProps to getStaticProps
// This enables Static Site Generation (SSG) for this page, significantly improving TTFB
// since the data is static and doesn't need to be fetched on every request.
export async function getStaticProps() {
    const [projectData, featuredProjectData] = getProjectData();
    const workData = getWorkData();
    const educationData = getEducationData();

    return {
        props: { projectData, featuredProjectData, workData, educationData },
    };
}
