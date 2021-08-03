import Script from "next/script";
import { BsCheckCircle } from "react-icons/bs";

const plans = [
  {
    title: "Starter Package",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: 45,
    priceMonthlyPlan: 16,
    mainFeatures: [
      { id: 1, value: "Access to the " },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Complete Package",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: 59,
    priceMonthlyPlan: 20,
    mainFeatures: [
      { id: 1, value: "Advanced invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing({ coupon, discount, price }) {
  function trackForFathom() {
    try {
      trackGoal("I1N8DDP0", price * 100); // fathom wants it in cents
    } catch (e) {}
  }

  return (
    <>
      <Script src="https://cdn.podia.com/embeds.js" />

      <div id="get" className="py-56 bg-purple-600">
        <div className="relative px-8 max-w-7xl mx-auto">
          <h1 className="text-center text-8xl font-extrabold tracking-tight text-white">
            Get the Course
          </h1>
          <p className="text-center mt-6 text-3xl text-purple-100">
            Start making VS Code work for you.
          </p>

          {/* Cards */}
          <div className="relative mt-20 max-w-2xl mx-auto px-4 pb-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 rounded-tl-lg rounded-tr-lg lg:block"
            />

            {/* loop over the plans */}
            <div className="relative space-y-6 lg:space-y-0 lg:mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-x-5">
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className={classNames(
                    plan.featured
                      ? "bg-white ring-4 ring-yellow-400 shadow-md rounded-lg"
                      : "bg-purple-500 my-4 rounded-lg",
                    "pt-6 px-6 pb-6 lg:pb-8 lg:px-8 lg:pt-12"
                  )}
                >
                  <div>
                    {/* header */}
                    <h3
                      className={classNames(
                        plan.featured ? "text-purple-600" : "text-white",
                        "text-xl font-semibold uppercase tracking-wide"
                      )}
                    >
                      {plan.title}
                    </h3>

                    {/* price */}
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 space-y-4 items-center">
                        <p
                          className={classNames(
                            plan.featured ? "text-purple-600" : "text-white",
                            "text-6xl font-extrabold tracking-tight"
                          )}
                        >
                          ${plan.price}
                        </p>

                        <p
                          className={classNames(
                            plan.featured ? "text-gray-500" : "text-purple-200",
                            "text-sm"
                          )}
                        >
                          Or 3 payments of ${plan.priceMonthlyPlan}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* plan features ====================================== */}
                  <h4 className="sr-only">Features</h4>
                  <ul className={classNames(plan.featured ? "" : "", "mt-10")}>
                    {plan.mainFeatures.map((mainFeature) => (
                      <li
                        key={mainFeature.id}
                        className="py-2 flex items-center"
                      >
                        <BsCheckCircle
                          className={classNames(
                            plan.featured
                              ? "text-purple-500"
                              : "text-purple-200",
                            "w-5 h-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            plan.featured ? "text-gray-600" : "text-white",
                            "ml-3 text-sm font-medium"
                          )}
                        >
                          {mainFeature.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* button */}
                  <div
                    onClick={trackForFathom}
                    dangerouslySetInnerHTML={{
                      __html: `
                      <a
                        href="https://learn.better.dev/productive-vs-code-starter?coupon=${coupon}"
                        data-podia-embed="link"
                        class="${classNames(
                          plan.featured
                            ? "bg-yellow-300 text-purple-900 hover:bg-yellow-200"
                            : "bg-purple-400 text-purple-50 hover:bg-purple-300",
                          "mt-10 w-full inline-block py-5 px-8 rounded-md shadow-sm text-center text-xl font-medium sm:w-auto lg:w-full"
                        )}"
                      >
                        Buy the ${plan.title}
                      </a>
                    `,
                    }}
                  />
                  <p
                    className={`mt-4 text-sm text-center ${
                      plan.featured ? "text-gray-800" : "text-purple-200"
                    }`}
                  >
                    Lifetime Refund Guarantee
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* guarantee */}
          <p className="mt-12 text-purple-200 text-center">
            <strong className="font-bold text-purple-100 block mb-1">
              Lifetime Refund Guarantee
            </strong>{" "}
            If you're ever unhappy with the course (even in the year 3050), get
            a full refund no questions asked.
          </p>
        </div>
      </div>
    </>
  );
}
