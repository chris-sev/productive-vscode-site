import Head from "next/head";
import SiteHeader from "../components/SiteHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main></main>

      <footer></footer>
    </>
  );
}
