import Image from "next/image";
import React, { useEffect, Suspense } from "react";

export default function ProjectCard({ project, index }) {
  return (
    <div className="border border-green-200 flex flex-col-reverse flex-col-1 flex-wrap md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4 items-center justify-items-center max-w-7xl mx-auto h-[100vh]">
      <div className="flex-grow border border-green-200 w-full md:h-full md:max-w-1/2">
        left/top
      </div>
      <div className="flex-grow border border-blue-400  w- md:h-full md:max-w-1/2 relative">
        <Image
          src="/mobile-placeholder.png"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
