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
import useInView from "react-cool-inview";
import FloatingButton from "../components/FloatingButton";
import ThisCourseIsForYou from "../components/ThisCourseIsForYou";

export default function Home() {
  const { coupon, discount, country, finalPrice } = usePPP(35);
  const { observe, inView } = useInView();

  return (
    <>
      <FloatingButton isShowing={!inView} />
      <CommandPalette />
      <PPPBar price={35} />
      {/* <SiteHeader /> */}
      <main className="space-y-48">
        <div ref={observe}>
          <SiteHero />
        </div>
        <Reasons />
        <VSCode />
        <ThisCourseIsForYou />
        <TimeIsMoney />
        <WhatYoullLearn />
        <BigReasons />
        <Pricing coupon={coupon} discount={discount} price={finalPrice} />
        {/* table of contents */}
        <FAQ />
        {/* who am i */}
      </main>
      test
      <footer></footer>
      <BetterDevFooter />
    </>
  );
}
