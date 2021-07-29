import Script from "next/script";
import { BsCheckCircle } from "react-icons/bs";

const plans = [
  {
    title: "Starter Package",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: 47,
    priceMonthlyPlan: 16,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Complete Package",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: 60,
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

      <div id="pricing" className="py-56 bg-indigo-600">
        <div className="relative px-8 max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Get the Course
          </h1>
          <p className="text-center mt-4 text-xl text-indigo-100">
            Start making VS Code work for you.
          </p>

          {/* Cards */}
          <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 rounded-tl-lg rounded-tr-lg lg:block"
            />

            {/* loop over the plans */}
            <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-6">
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className={classNames(
                    plan.featured
                      ? "col-span-2 bg-white ring-2 ring-indigo-700 shadow-md rounded-lg"
                      : "col-span-2 col-start-2 bg-indigo-500 my-4 rounded-l-lg",
                    "pt-6 px-6 pb-6 lg:pb-8 lg:px-8 lg:pt-12"
                  )}
                >
                  <div>
                    {/* header */}
                    <h3
                      className={classNames(
                        plan.featured ? "text-indigo-600" : "text-white",
                        "text-xl font-semibold uppercase tracking-wide"
                      )}
                    >
                      {plan.title}
                    </h3>

                    {/* price */}
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-5 space-y-4 items-center">
                        <p
                          className={classNames(
                            plan.featured ? "text-indigo-600" : "text-white",
                            "text-6xl font-extrabold tracking-tight"
                          )}
                        >
                          ${plan.price}
                        </p>

                        <p
                          className={classNames(
                            plan.featured ? "text-gray-500" : "text-indigo-200",
                            "text-sm"
                          )}
                        >
                          Or 3 payments of ${plan.priceMonthlyPlan}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul
                    className={classNames(
                      plan.featured
                        ? "border-gray-200 divide-gray-200"
                        : "border-indigo-500 divide-indigo-500 divide-opacity-75",
                      "mt-7 border-t divide-y lg:border-t-0"
                    )}
                  >
                    {plan.mainFeatures.map((mainFeature) => (
                      <li
                        key={mainFeature.id}
                        className="py-3 flex items-center"
                      >
                        <BsCheckCircle
                          className={classNames(
                            plan.featured
                              ? "text-indigo-500"
                              : "text-indigo-200",
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

                  <div
                    onClick={trackForFathom}
                    dangerouslySetInnerHTML={{
                      __html: `
                        <a
                          href="https://learn.better.dev/productive-vs-code-starter?coupon=${coupon}"
                          data-podia-embed="link"
                          class="${classNames(
                            plan.featured
                              ? "bg-indigo-600 text-white hover:bg-indigo-700"
                              : "bg-white text-indigo-600 hover:bg-indigo-50",
                            "mt-6 w-full inline-block py-4 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                          )}"
                        >
                          Buy the ${plan.title}
                        </a>
                      `,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
