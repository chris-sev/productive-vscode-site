import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import HideAndShow from "../components/HideAndShow";
import Pricing from "../components/Pricing";

export default function Home() {
  const { coupon, discount, country } = usePPP();

  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main>
        <SiteHero />
        <HideAndShow />
        <Pricing coupon={coupon} discount={discount} />
      </main>

      <footer></footer>
    </>
  );
}
