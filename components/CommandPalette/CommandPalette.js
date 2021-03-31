import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";
import useOnClickOutside from "use-onclickoutside";
import FuzzySearch from "fuzzy-search";
import VimModeElmo from "./VImModeElmo";

export default function CommandPalette() {
  const commandPaletteRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const [vimMode, setVimMode] = useState(false);
  const [search, setSearch] = useState("");
  const [searcher, setSearcher] = useState(null);

  // open the command palette and focus on the input
  useHotkeys("cmd+shift+p", () => {
    setIsShowing(true);
    // inputRef.current.focus();
  });

  // close the command palette with escape or clicking outside
  useHotkeys("esc", () => setIsShowing(false));
  useOnClickOutside(commandPaletteRef, () => setIsShowing(false));

  const close = () => setIsShowing(false);

  const items = [
    {
      text: "Navigate: Features",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Navigate: Why This Course",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Navigate: Workflows",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Navigate: Pricing",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Navigate: Table of Contents",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Navigate: About Chris",
      handler() {
        router.push("#pricing");
        close();
      },
    },
    {
      text: "Activate Vim Mode",
      handler() {
        setVimMode(true);
        close();
      },
    },
  ];

  useEffect(() => {
    const searcher = new FuzzySearch(items, ["text"]);
    setSearcher(searcher);
  }, []);

  const filteredItems = search ? searcher.search(search) : items;

  if (!isShowing) return <div />;
  if (vimMode) return <VimModeElmo />;

  return (
    <div className="fixed inset-x-0 top-0 z-50 text-white">
      <div ref={commandPaletteRef} className="max-w-2xl mx-auto">
        {/* top command palette */}
        <div className="bg-gray-900 text-lg p-3">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              ref={inputRef}
              className="py-3 px-5 w-full bg-gray-800 focus:outline-none focus:bg-gray-700 placeholder-gray-700"
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

        {/* bottom command palette */}
        <CommandPaletteList items={filteredItems} />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * Command Palette List
 * ============================================================================
 */
function CommandPaletteList({ items }) {
  const [activeItem, setActiveItem] = useState(0);
  useHotkeys("down", chooseNextActiveItem);
  useHotkeys("up", choosePreviousActiveItem);
  useHotkeys("return", () => items[activeItem].handler(), {}, [activeItem]);

  function handleClick(e, item) {
    e.preventDefault();
    item.handler();
  }

  // make sure we cant choose past the length of the list
  function chooseNextActiveItem(e) {
    e.preventDefault();

    console.log("wtf");

    setActiveItem((activeItem) => {
      if (activeItem === items.length - 1) return activeItem;
      return activeItem + 1;
    });
  }

  // make sure we cant go to negative items in the list
  function choosePreviousActiveItem(e) {
    e.preventDefault();

    setActiveItem((activeItem) => {
      if (activeItem === 0) return activeItem;
      return activeItem - 1;
    });
  }

  return (
    <div className="bg-gray-800 last:rounded-b">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-5  ${
            activeItem === index ? "bg-violet-900" : "hover:bg-violet-900"
          }`}
          onClick={(e) => handleClick(e, item)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
