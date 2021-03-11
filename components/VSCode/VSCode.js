import { useState } from "react";
import VSCodeHeader from "./VSCodeHeader";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeExplorer from "./VSCodeExplorer";
import VSCodeTabBar from "./VSCodeTabBar";
import VSCodeContent from "./VSCodeContent";
import VSCodeMiniMap from "./VSCodeMiniMap";
import VSCodeStatusBar from "./VSCodeStatusBar";

export default function VSCode() {
  const [theme, setTheme] = useState("default");

  return (
    <div className="relative px-8">
      {/* background gradients */}
      <div className="absolute top-0 left-10 z-10 bg-gradient-to-br from-pink-500 to-red-800 rounded-lg h-96 w-3/4"></div>
      <div className="absolute top-80 left-20 z-20 bg-gradient-to-br from-green-500 to-blue-800 rounded-lg h-72 w-1/2"></div>

      {/* tagline */}
      <div className="relative z-50 pt-20 pb-16 pl-24 space-y-6">
        <h2 className="text-5xl font-extrabold text-white">
          Make VS Code Work for You
        </h2>
        <p className="text-2xl text-pink-50">
          You spend <span className="text-red-900">90%</span> of your coding in
          VS Code. It is <strong className="font-extrabold">important</strong>{" "}
          to be fast and efficient.
        </p>
      </div>

      <div className="relative z-50 pl-24 rounded-lg overflow-hidden">
        {/* header */}
        <VSCodeHeader />

        {/* main section */}
        <main className="relative flex" style={{ minHeight: "800px" }}>
          {/* activity bar */}
          <div className="w-16 flex-shrink">
            <VSCodeActivityBar />
          </div>

          {/* explorer */}
          <div className="w-72 flex-shrink">
            <VSCodeExplorer />
          </div>

          {/* main content */}
          <div className="flex-grow relative flex flex-col">
            <VSCodeTabBar />
            <div className="relative flex-grow">
              <VSCodeContent />

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
  );
}
