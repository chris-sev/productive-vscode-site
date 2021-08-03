import {
  LightBulbIcon,
  FingerPrintIcon,
  VariableIcon,
  PuzzleIcon,
  QrcodeIcon,
} from "@heroicons/react/outline";
import { GiCogLock, GiPaintBucket, GiWaveSurfer } from "react-icons/gi";
import { GoKeyboard } from "react-icons/go";
import { AiOutlineMacCommand } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

export default function Reasons() {
  return (
    <div className="lg:max-w-7xl mx-auto space-y-24">
      <ReactTooltip />

      {/* header */}
      <div className="flex items-center justify-center">
        <h2 className="text-gray-700 text-5xl transform -rotate-1">
          <span className="block mb-2 text-3xl">
            Do you ever see someone code and say...
          </span>
          <span className="font-extrabold text-black">wait</span>{" "}
          <span role="img">😳</span> <span role="img">🤨</span>{" "}
          <span role="img">🤯</span>{" "}
          <span className="font-extrabold text-black">
            how'd they do that?!
          </span>
        </h2>
      </div>
      {/* content */}
      <div className="lg:max-w-2xl mx-auto space-y-10 text-gray-700 text-2xl leading-relaxed">
        <p className="">
          Spending time to learn your text editor may sound counterintuitive.
          (just let me get to the code!) But don't think of it as wasting time
          clicking around VS Code; think of it as{" "}
          <strong className="font-bold italic">investing</strong> time into your
          text editor.
        </p>
        <p>VS Code is a feature packed editor with awesome things like:</p>
        <ul className="text-xl mt-4 ml-6 text-gray-600 space-y-4">
          <li className="flex items-center space-x-2">
            <LightBulbIcon className="w-7 h-7 text-blue-500" />
            <span>Intellisense</span>
          </li>
          <li className="flex items-center space-x-2">
            <FingerPrintIcon className="w-7 h-7 text-pink-500" />
            <span>Built-in Git</span>
          </li>
          <li className="flex items-center space-x-2">
            <VariableIcon className="w-7 h-7 text-violet-500" />
            <span>Built-in Terminal</span>
          </li>
          <li className="flex items-center space-x-2">
            <PuzzleIcon className="w-7 h-7 text-red-500" />
            <span>Debugging</span>
          </li>
          <li className="flex items-center space-x-2">
            <QrcodeIcon className="w-7 h-7 text-green-500" />
            <span>Extensions</span>
          </li>
        </ul>
        <h2 className="text-4xl leading-relaxed py-4">
          VS Code can do{" "}
          <strong className="italic font-extrabold bg-gradient-to-r from-cyan-400 to-light-blue-400 text-transparent bg-clip-text">
            so much more
          </strong>
          .
        </h2>
        <p>
          The best developers know how to squeeze productivity out of their
          editors with things like:
        </p>
        <ul className="text-xl mt-4 ml-6 text-gray-600 space-y-4">
          <li className="flex items-center space-x-2">
            <GiCogLock className="w-7 h-7 text-blue-500" />
            <span>Settings and Integrations</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiPaintBucket className="w-7 h-7 text-pink-500" />
            <span>Themes</span>
          </li>
          <li className="flex items-center space-x-2">
            <GoKeyboard className="w-7 h-7 text-violet-500" />
            <span>Multi-Cursor and Keyboard Shortcuts</span>
          </li>
          <li className="flex items-center space-x-2">
            <AiOutlineMacCommand className="w-7 h-7 text-red-500" />
            <span>Command Palette and Snippets</span>
          </li>
          <li className="flex items-center space-x-2">
            <GiWaveSurfer className="w-7 h-7 text-green-500" />
            <span>Workflows</span>
          </li>
        </ul>
        <p className="text-gray-700">
          Learning how to use your text editor is one of the quickest
          investments you can do.{" "}
          <span className="text-pink-600">
            With this course, you will learn to be
            <span className="font-mono italic text-base inline-block mx-2 py-1 px-3 rounded-full bg-pink-200 text-pink-900">
              "that developer"
            </span>
            and people will be asking "<span role="img">🤯</span> how did
            you do that?!"
          </span>
        </p>
      </div>
    </div>
  );
}
