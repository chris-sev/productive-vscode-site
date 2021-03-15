import { useRef } from "react";
import { trackGoal } from "fathom-client";

export default function GetSamplesForm() {
  const formEl = useRef(null);

  function trackForFathom(e) {
    e.preventDefault();

    try {
      trackGoal("GCT1JLIG", 0);
    } catch (e) {}

    formEl.current && formEl.current.submit();
  }

  return (
    <div className="bg-purple-400 bg-opacity-40 py-5 px-6 rounded w-1/2 lg:max-w-3xl mx-auto text-sm md:text-base text-left">
      <p className="mb-3 text-purple-100">
        Get updates on when this course is released!
      </p>
      <form
        onSubmit={trackForFathom}
        ref={formEl}
        className="md:flex md:shadow rounded-lg"
        action="https://static.mailerlite.com/webforms/submit/k0w7t1"
        data-code="k0w7t1"
        method="post"
        target="_blank"
      >
        <input
          className="w-full md:w-auto flex-grow p-2 md:p-3 rounded-t-lg md:rounded-r-none md:rounded-l-lg focus:outline-none focus:bg-purple-50 border-4 border-white focus:border-teal-300 appearance-none"
          aria-label="email"
          aria-required="true"
          type="email"
          name="fields[email]"
          placeholder="Enter Your Email"
          autocomplete="email"
        />

        <input type="hidden" name="ml-submit" value="1" />

        <button
          type="submit"
          className="rounded-b-lg md:rounded-l-none md:rounded-r-lg w-full md:w-auto py-3 px-3 md:px-5 bg-yellow-300 hover:bg-yellow-200 text-yellow-900 hover:text-white focus:outline-none font-bold transition duration-200"
        >
          Get Updates
        </button>

        <input type="hidden" name="anticsrf" value="true" />
      </form>
      {/* <p className="mt-5">
        <a href="#get" className="block group text-purple-300 hover:text-white">
          Or <span className="underline">buy now</span> if you're already
          convinced{" "}
          <span
            role="img"
            className="inline-block transform group-hover:translate-x-2 transition duration-300 ease-in-out"
          >
            👇
          </span>
        </a>
      </p> */}
    </div>
  );
}
