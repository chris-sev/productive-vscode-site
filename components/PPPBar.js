import { useEffect, useState } from "react";
import fetchPPP from "purchasing-power-parity";
import { useDetectAdBlock } from "adblock-detect-react";
import queryString from "query-string";

const coupons = {
  10: "PPP-10B",
  20: "PPP-20Y",
  30: "PPP-30U",
  40: "PPP-40T",
  50: "PPP-50E",
  60: "PPP-60J",
  70: "PPP-70X",
  80: "PPP-80Q",
  90: "PPP-90I",
};

/**
 * Round to 1 decimal (ie 0.2)
 */
function round(value) {
  var multiplier = Math.pow(10, 1 || 0);
  return Math.round(value * multiplier) / multiplier;
}

/**
 * Get a coupon code and discount rate based on users country
 */
export function usePPP() {
  const [coupon, setCoupon] = useState(null);
  const [discount, setDiscount] = useState(null); // in percentage // number
  const [country, setCountry] = useState(null);

  useEffect(async () => {
    // handle a coupon in the url
    const urlParams = queryString.parse(window.location.search);
    if (urlParams.coupon) {
      const urlCoupon = urlParams.coupon;

      if (urlCoupon === "LEARN-BY-BUILDING") setDiscount(50);
      if (urlCoupon === "TO-THE-MOON") setDiscount(75);
      if (urlCoupon === "GOOD-VIBES") setDiscount(100);
      if (urlCoupon === "LRVL-NWS") setDiscount(15);

      return setCoupon(urlCoupon);
    }

    // go for ppp coupon now
    try {
      const ppp = await fetchPPP();
      const conversionFactor = ppp.pppConversionFactor;

      if (conversionFactor >= 0.9 || conversionFactor === 0) return;

      const pppDiscount = 100 - round(conversionFactor) * 100;
      const pppCoupon = coupons[pppDiscount] || null;

      setCountry(ppp.countryName);
      setDiscount(pppDiscount);
      setCoupon(pppCoupon);
    } catch (err) {
      return;
    }
  }, []);

  return { coupon, discount, country };
}

export default function PPPBar() {
  const adBlockDetected = useDetectAdBlock();
  const { coupon, discount, country } = usePPP();

  if (adBlockDetected)
    return (
      <div className="bg-black text-gray-100">
        <div className="px-8 py-5 text-center">
          Hey! <span role="img">👋</span> I've got automatic{" "}
          <strong className="font-extrabold">Purchasing Power Parity</strong>{" "}
          turned on for this course. Sometimes ad blocker stops it though.{" "}
          <br />
          If you are from a country that has PPP, disable your adblocker to see
          a discount.
        </div>
      </div>
    );

  if (!coupon) return <div />;

  // sometimes we could have a coupon, but no country
  // this is if somebody visits the site with a coupon directly
  // no PPP, but they have a coupon
  if (coupon && !country)
    return (
      <div className="bg-black text-gray-200 leading-loose">
        <div className="px-8 py-5 lg:max-w-6xl mx-auto flex items-center justify-center space-x-5">
          <div className="lg:text-xl">
            Coupon activated!{" "}
            <code className="inline-block p-2 bg-gray-900 text-yellow-200 rounded">
              {coupon}
            </code>
          </div>
          <div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 text-yellow-900 font-extrabold p-4 mb-2 rounded lg:text-3xl flex items-center justify-center text-center lg:text-left">
              {discount}% off
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-black text-gray-100 leading-loose">
      <div className="px-8 py-5 max-w-6xl mx-auto">
        <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
          {/* left column */}
          <div className="flex flex-grow items-center">
            <div>
              Hey hey! I see you are coming from{" "}
              <strong className="font-bold text-white">{country}</strong>.{" "}
              <br />I support{" "}
              <strong className="font-bold text-white">
                Purchasing Power Parity
              </strong>
              . I want this course to be affordable to everyone around the
              world.
            </div>
          </div>

          {/* right column */}
          <div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 text-yellow-900 font-extrabold p-4 mb-2 rounded text-3xl flex items-center justify-center">
              {discount}% off
            </div>
            <p className="text-sm text-yellow-200">
              Automatically applied for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
