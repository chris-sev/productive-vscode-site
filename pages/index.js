import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main>
        <SiteHero />
      </main>

      <footer></footer>
    </>
  );
}
