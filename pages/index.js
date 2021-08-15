import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Portfolio - NextJS - TW</title>
        <meta name="description" content="Welcome to me, Moe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* profile card */}
      <div>
        <Image
          src="/blob.svg"
          fill=""
          objectFit="contain"
          height={100}
          width={100}
        />
      </div>
      <main className=" flex-1">Main</main>

      <footer className="border-t mx-10">
        <p className="text-sm text-gray-400">Designed & Developed by Moe.</p>
      </footer>
    </div>
  );
}
