import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import BigReasons from "../components/BigReasons";
import VSCode from "../components/VSCode/VSCode";
import Pricing from "../components/Pricing";

export default function Home() {
  const { coupon, discount, country } = usePPP();

  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PPPBar />
      <SiteHeader />

      <main className="space-y-56">
        <SiteHero />
        <BigReasons />
        <VSCode />

        {/* what youll learn */}
        <Pricing coupon={coupon} discount={discount} />
        {/* whats in the course */}
        {/* faq */}
      </main>

      <footer></footer>
    </>
  );
}
