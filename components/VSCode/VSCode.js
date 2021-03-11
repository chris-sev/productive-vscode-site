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
    <div className="px-8">
      {/* header */}
      <VSCodeHeader />

      {/* main section */}
      <main className="relative flex" style={{ height: "500px" }}>
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
  );
}
