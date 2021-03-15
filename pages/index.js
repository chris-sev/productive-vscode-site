import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import BigReasons from "../components/BigReasons";
import VSCode from "../components/VSCode/VSCode";
import Pricing from "../components/Pricing";
import TimeIsMoney from "../components/TimeIsMoney";
import BetterDevFooter from "../components/BetterDevFooter";

export default function Home() {
  const { coupon, discount, country, finalPrice } = usePPP(35);

  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <PPPBar price={35} /> */}
      <SiteHeader />

      <main className="space-y-56">
        <SiteHero />
        <BigReasons />
        <VSCode />
        <TimeIsMoney />

        {/* what youll learn */}
        {/* <Pricing coupon={coupon} discount={discount} price={finalPrice} /> */}
        {/* whats in the course */}
        {/* faq */}
        {/* who am i */}
      </main>

      <footer></footer>
      <BetterDevFooter />
    </>
  );
}
