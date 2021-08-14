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
      <main className="border border-red-600 flex-1">Main</main>

      <footer className="border border-green-600">footer</footer>
    </div>
  );
}
