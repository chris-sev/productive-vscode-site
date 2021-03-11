import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
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

      <main className="space-y-20">
        <SiteHero />

        <div>
          buttons to show off multiple workflows
          <VSCode />
        </div>

        <Pricing coupon={coupon} discount={discount} />
      </main>

      <footer></footer>
    </>
  );
}
