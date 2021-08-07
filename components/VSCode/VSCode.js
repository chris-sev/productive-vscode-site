import { useState } from "react";
import VSCodeHeader from "./VSCodeHeader";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeExplorer from "./VSCodeExplorer";
import VSCodeTabBar from "./VSCodeTabBar";
import VSCodeContent from "./VSCodeContent";
import VSCodeMiniMap from "./VSCodeMiniMap";
import VSCodeStatusBar from "./VSCodeStatusBar";

export default function VSCode({ children }) {
  const [theme, setTheme] = useState("is-default");

  // theme
  // is-minimal

  return (
    <div
      className={`vscode relative rounded-lg overflow-hidden ${theme}`}
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
          <div className="relative flex-grow h-64">
            {/* <VSCodeContent /> */}
            {children}

            <div className="absolute top-0 right-0 z-10">
              <VSCodeMiniMap />
            </div>
          </div>
        </div>
      </main>

      {/* status bar */}
      <VSCodeStatusBar />
    </div>
  );
}
