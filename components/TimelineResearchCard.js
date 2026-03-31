import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function TimelineResearchCard({
    cardInfo,
    index,
    uniquekey,
    priorityImages = false,
}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const fadeOut = "translate-y-10 opacity-0";
    const fadeIn = "translate-y-0 opacity-100";

    const content = (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-400 dark:text-indigo-600 text-sm tracking-wide">
                {cardInfo?.dateStart} {cardInfo?.dateStart !== cardInfo?.dateEnd ? `- ${cardInfo?.dateEnd}` : ''}
            </span>
            <h1 className="text-xl font-bold pt-1 text-red-500 dark:text-red-400">
                {cardInfo?.title}
            </h1>
            <h2 className="text-lg font-semibold pt-1 text-gray-700 dark:text-gray-300 italic">
                {cardInfo?.journal}
            </h2>
            <h3 className="text-md font-medium text-gray-500 dark:text-gray-400 mt-1">
                {cardInfo?.authors}
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-justify">
                {cardInfo?.abstract}
            </p>
            {cardInfo?.link && (
                <div className="mt-4">
                    <a
                        href={cardInfo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold underline text-sm"
                    >
                        View Publisher
                    </a>
                </div>
            )}
        </div>
    );

    let rightMarkup = cardInfo ? (
        <div
            id={"research-" + index}
            key={"research-" + index}
            ref={ref}
            className={`text-black dark:text-white relative z-10 transition-all transform duration-300 ${
                inView ? fadeIn : fadeOut
            }`}
        >
            <div className="timeline-img">
                <Image
                    priority={priorityImages}
                    src={cardInfo ? cardInfo.companyLogo : "/"}
                    alt={"journal logo"}
                    height={24}
                    width={24}
                    className="rounded-full"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="timeline-container">
                <div className="timeline-pointer" aria-hidden="true"></div>
                {content}
            </div>
        </div>
    ) : null;

    let leftMarkup = cardInfo ? (
        <div
            id={"research-" + index}
            ref={ref}
            className={`text-black dark:text-white relative z-10 transition-all transform duration-300 ${
                inView ? fadeIn : fadeOut
            }`}
            key={"research-" + index}
        >
            <div className="timeline-img">
                <Image
                    priority={priorityImages}
                    src={cardInfo ? cardInfo.companyLogo : "/"}
                    alt={"journal logo"}
                    height={24}
                    width={24}
                    className="rounded-full"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="timeline-container timeline-container-left">
                <div
                    className="timeline-pointer timeline-pointer-left"
                    aria-hidden="true"
                ></div>
                {content}
            </div>
        </div>
    ) : null;

    if ((index + 1) % 2) {
        return (
            <div className="px-10" key={uniquekey}>
                {rightMarkup}
            </div>
        );
    } else {
        return (
            <div className="px-10" key={uniquekey}>
                {leftMarkup}
            </div>
        );
    }
}

export default TimelineResearchCard;
