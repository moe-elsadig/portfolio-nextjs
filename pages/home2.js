import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Image from "next/image";

function Home2() {
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
        <div className="bg-blue-200 w-full md:w-1/2 min-h-screen">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
            <div className={`bg-red-200 min-h-[50vh] md:min-h-screen border`}>
              <h1>Hello</h1>
            </div>
          ))}
        </div>
        <div className="bg-white sticky top-0 w-full md:w-1/2 h-[50vh] md:h-screen">
          <div className="h-full md:h-screen relative">
            <div className="max-w-full max-h-full">
              <Image
                alt=""
                key={"phone"}
                src={"/projects/mobile-vector.svg"}
                layout="fill"
                objectFit="contain"
                className={`sticky top-0`}
              />
            </div>
          </div>
        </div>
      </main>
      <ProfileCard />
    </div>
  );
}

export default Home2;
