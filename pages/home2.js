import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";
import Image from "next/image";

function Home2() {
  let image1 = "/projects/test.svg";
  let image2 = "/projects/alsa3i-mobile-bordered.png";
  let image3 = "/projects/altulumba-mobile-3.png";
  let image4 = "/projects/f1.png";
  let image5 = "/projects/f2.png";

  const [mobileImg, setMobileImg] = useState(image4);
  const [showTop, setShowTop] = useState("mobile");

  let changed = false;

  useEffect(() => {
    console.log("image rendered", mobileImg);

    return;
  }, [mobileImg]);

  if (!changed) {
    setTimeout(() => {
      setMobileImg(image5);
      console.log("image changed", mobileImg);
      changed = true;
    }, 3000);
  }

  const handleScroll = () => {
    console.log("scrolling");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
          <div className="flex flex-col-2 justify-around">
            <button
              onClick={() => setShowTop("mobile")}
              className="px-2 rounded-full bg-red-200"
            >
              mobile
            </button>
            <button
              onClick={() => setShowTop("desktop")}
              className="px-2 rounded-full bg-red-200"
            >
              desktop
            </button>
          </div>
          <div className="h-full md:h-screen relative">
            <div className="max-w-full max-h-full">
              {showTop !== "desktop" && (
                <Image
                  alt=""
                  key={"phone"}
                  src={"/projects/desktop-vector.svg"}
                  height={1720}
                  width={1112}
                  layout="fill"
                  objectFit="contain"
                  className={`sticky top-0`}
                />
              )}
              <Image
                alt=""
                key={"phone2"}
                src={mobileImg}
                height={1720}
                width={1112}
                layout="fill"
                objectFit="contain"
                className={``}
              />
              {showTop === "desktop" && (
                <Image
                  alt=""
                  key={"phone"}
                  src={"/projects/desktop-vector.svg"}
                  height={1720}
                  width={1112}
                  layout="fill"
                  objectFit="contain"
                  className={`sticky top-0`}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <ProfileCard />
    </div>
  );
}

export default Home2;
