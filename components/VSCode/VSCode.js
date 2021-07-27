import { useState } from "react";
import VSCodeHeader from "./VSCodeHeader";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeExplorer from "./VSCodeExplorer";
import VSCodeTabBar from "./VSCodeTabBar";
import VSCodeContent from "./VSCodeContent";
import VSCodeMiniMap from "./VSCodeMiniMap";
import VSCodeStatusBar from "./VSCodeStatusBar";
import {
  SiJavascript,
  SiCsswizardry,
  SiTypescript,
  SiPhp,
  SiCsharp,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";

export default function VSCode() {
  const [theme, setTheme] = useState("is-default");

  // theme
  // is-minimal

  return (
    <div>
      <div className="relative px-8">
        {/* background gradients */}
        <div className="absolute top-0 left-10 z-10 bg-gradient-to-br from-purple-500 to-indigo-800 rounded-lg h-1/2 w-full lg:w-3/4"></div>
        <div className="absolute top-96 lg:top-80 left-16 lg:left-20 z-20 bg-gradient-to-br from-green-500 to-blue-800 rounded-lg h-96 w-1/2"></div>

        <div className="relative z-50 pt-20 pb-16 pl-24">
          {/* tagline */}
          <p className="mb-2 text-2xl text-purple-50 leading-relaxed">
            Don't just learn about settings and extensions.
          </p>
          <h2 className="mb-12 text-5xl font-extrabold text-white">
            Learn a workflow for every task...
          </h2>

          {/* buttons */}
          <div className="lg:pl-24 grid grid-cols-8 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-8">
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-everyday")}
            >
              The Everyday Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-javascript")}
            >
              The JavaScript Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-minimal")}
            >
              The Minimalist Workflow
            </button>
            <button
              className="col-span-4 lg:col-span-1 py-8 px-12 rounded-lg bg-gray-800 text-white font-bold text-lg"
              onClick={() => setTheme("is-git")}
            >
              The Git Workflow
            </button>
          </div>
        </div>

        <div
          className={`vscode relative z-50 pl-12 lg:pl-24 rounded-lg overflow-hidden ${theme}`}
        >
          {/* header */}
          <VSCodeHeader />

          {/* main section */}
          <main className="vscode-inner relative overflow-hidden grid grid-cols-[50px,300px,1fr] bg-[#1e1e1e] transition duration-300">
            {/* activity bar */}
            <VSCodeActivityBar />

            {/* explorer */}
            <VSCodeExplorer />

            {/* content */}
            <div className="vscode-main relative flex flex-col">
              <VSCodeTabBar />
              <div className="relative flex-grow">
                {/* <VSCodeContent /> */}

                <div className="absolute top-0 right-0 z-10">
                  <VSCodeMiniMap />
                </div>
              </div>
            </div>
          </main>

          {/* status bar */}
          <VSCodeStatusBar />
        </div>
      </div>

      {/* workflow for every language or framework */}
      <div className="relative px-8 mt-24">
        {/* background gradients */}
        <div className="absolute top-0 left-10 z-10 bg-purple-500 rounded-lg h-3/4 w-full lg:w-3/4"></div>
        <div className="absolute -top-4 right-20 z-20 bg-purple-600 rounded-lg h-24 w-1/3"></div>

        <div className="relative z-50 pt-24 pl-24">
          {/* tagline */}
          <h2 className="mb-12 text-3xl font-extrabold text-white">
            Learn a workflow for your favorite language or framework
          </h2>

          <div className="grid grid-cols-7">
            <div>
              <SiJavascript className="h-28 w-28 text-yellow-400" />
            </div>
            <div>
              <SiCsswizardry className="h-28 w-28 text-blue-400" />
            </div>
            <div>
              <RiReactjsLine className="h-28 w-28 text-blue-500" />
            </div>
            <div>
              <SiTypescript className="h-28 w-28 text-blue-600" />
            </div>
            <div>
              <SiPhp className="h-28 w-28 text-purple-600" />
            </div>
            <div>
              <FaLaravel className="h-28 w-28 text-pink-400" />
            </div>
            <div>
              <SiCsharp className="h-28 w-28 text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
