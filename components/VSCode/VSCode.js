import { useState } from "react";
import VSCodeHeader from "./VSCodeHeader";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeExplorer from "./VSCodeExplorer";
import VSCodeMainContent from "./VSCodeMainContent";
import VSCodeMiniMap from "./VSCodeMiniMap";
import VSCodeStatusBar from "./VSCodeStatusBar";

export default function VSCode() {
  const [theme, setTheme] = useState("default");

  return (
    <div className="px-8">
      {/* header */}
      <VSCodeHeader />

      {/* main section */}
      <main className="relative flex h-96">
        {/* activity bar */}
        <div className="w-14 flex-shrink">
          <VSCodeActivityBar />
        </div>

        {/* explorer */}
        <div className="w-20 flex-shrink">
          <VSCodeExplorer />
        </div>

        {/* main content */}
        <div className="flex-grow relative">
          <VSCodeMainContent />

          {/* minimap */}
          <div className="absolute top-0 right-0">
            <VSCodeMiniMap />
          </div>
        </div>
      </main>

      {/* status bar */}
      <VSCodeStatusBar />
    </div>
  );
}
