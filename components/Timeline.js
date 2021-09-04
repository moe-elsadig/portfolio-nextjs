import React from "react";
import Image from "next/image";

function Timeline() {
  return (
    <div className="container mx-auto px-6 relative flex flex-col space-y-8 bg-gray-200">
      <div className="absolute w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
      {/* container */}
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/6291572/pexels-photo-6291572.jpeg?auto=compress&cs=tinysrgb&h=100"
          className="timeline-img"
        />
        <div className="timeline-container">
          <div className="timeline-pointer" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Jan 2021
            </span>
            <h1 className="text-2xl font-bold pt-1">Project</h1>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/6291572/pexels-photo-6291572.jpeg?auto=compress&cs=tinysrgb&h=100"
          className="timeline-img"
        />
        <div className="timeline-container timeline-container-left">
          <div
            className="timeline-pointer timeline-pointer-left"
            aria-hidden="true"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Jan 2021
            </span>
            <h1 className="text-2xl font-bold pt-1">Project</h1>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/6291572/pexels-photo-6291572.jpeg?auto=compress&cs=tinysrgb&h=100"
          className="timeline-img"
        />
        <div className="timeline-container">
          <div className="timeline-pointer" aria-hidden="true"></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="font-bold text-indigo-600 text-sm tracking-wide">
              Jan 2021
            </span>
            <h1 className="text-2xl font-bold pt-1">Project</h1>
            <p className="pt-1">
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
