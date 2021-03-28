import { useState, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import useOnClickOutside from "use-onclickoutside";

export default function CommandPalette() {
  const commandPaletteRef = useRef(null);
  const [isShowing, setIsShowing] = useState(false);

  // open the command palette
  useHotkeys("cmd+shift+p", () => setIsShowing(true));

  // close the command palette with escape or clicking outside
  useHotkeys("esc", () => setIsShowing(false));
  useOnClickOutside(commandPaletteRef, () => setIsShowing(false));

  if (!isShowing) return <div />;

  return (
    <div className="fixed inset-x-0 top-0 z-50 text-white">
      <div ref={commandPaletteRef} className="max-w-2xl mx-auto">
        {/* top command palette */}
        <div className="bg-gray-900 text-lg py-6 px-5">top part with form</div>
        {/* bottom command palette */}
        <CommandPaletteList />
      </div>
    </div>
  );
}

const items = [
  {
    text: "Navigate: Features",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Navigate: Why This Course",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Navigate: Workflows",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Navigate: Pricing",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Navigate: Table of Contents",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Navigate: About Chris",
    handler() {
      console.log("handler called!");
    },
  },
  {
    text: "Activate Vim Mode",
    handler() {
      console.log("handler called!");
    },
  },
];

function CommandPaletteList() {
  const [activeItem, setActiveItem] = useState(0);
  useHotkeys("down", chooseNextActiveItem);
  useHotkeys("up", choosePreviousActiveItem);
  useHotkeys("return", () => activeItem.handler(), {}, [activeItem]);

  // make sure we cant choose past the length of the list
  function chooseNextActiveItem(e) {
    e.preventDefault();

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
          className={`p-5 ${activeItem === index ? "bg-light-blue-900" : ""}`}
          onClick={item.handler}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
