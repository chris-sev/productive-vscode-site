import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import BigReasons from "../components/BigReasons";
import VSCode from "../components/VSCode/VSCode";
import Pricing from "../components/Pricing";
import WhatYoullLearn from "../components/WhatYoullLearn";
import TimeIsMoney from "../components/TimeIsMoney";
import BetterDevFooter from "../components/BetterDevFooter";
import Reasons from "../components/Reasons";
import CommandPalette from "../components/CommandPalette/CommandPalette";
import FAQ from "../components/FAQ";

export default function Home() {
  const { coupon, discount, country, finalPrice } = usePPP(35);

  return (
    <>
      <CommandPalette />
      <PPPBar price={35} />
      {/* <SiteHeader /> */}

      <main className="space-y-48">
        <SiteHero />
        <Reasons />

        <VSCode />
        {/* need something here */}
        {/* any of these sound familiar? */}
        {/* vs code is awesome because... */}
        <BigReasons />
        <TimeIsMoney />
        {/* do you feel like this? */}
        <div>
          NOTE: MOVE THIS SOMEWHERE ELSE if you feel like you could be getting
          more out of vs code, i promise you can!
        </div>
        <WhatYoullLearn />
        {/* what youll learn */}
        {/* who this course is for */}
        {/* who this course is not for */}
        <Pricing coupon={coupon} discount={discount} price={finalPrice} />
        {/* whats in the course */}
        {/* faq */}
        <FAQ />
        {/* who am i */}
      </main>
      <footer></footer>
      <BetterDevFooter />
    </>
  );
}
