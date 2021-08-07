import { useState } from "react";

export default function Workflows() {
  const [theme, setTheme] = useState("is-default");

  // theme
  // is-minimal

  return (
    <div>
      <div className="relative px-8">
        {/* background gradients */}
        <div className="absolute top-0 left-10 z-10 bg-gradient-to-br from-purple-500 to-indigo-800 rounded-lg h-1/2 w-full lg:w-3/4"></div>
        <div className="absolute top-72 left-16 lg:left-20 z-20 bg-gradient-to-br from-green-500 to-blue-800 rounded-lg h-96 w-1/2"></div>

        <div className="relative z-50 pt-20 pb-16 pl-24">
          {/* tagline */}
          <h2 className="mb-12 text-5xl font-extrabold text-white">
            Learn a workflow for every task...
          </h2>

          {/* buttons */}
          <div className="lg:pl-24 grid grid-cols-8 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-8">
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-full bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-everyday")}
            >
              The Everyday Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-full bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-javascript")}
            >
              The JavaScript Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-full bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-minimal")}
            >
              The Minimalist Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-full bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-git")}
            >
              The Git Workflow
            </button>
          </div>
        </div>

        {/* images go here */}
      </div>
    </div>
  );
}
