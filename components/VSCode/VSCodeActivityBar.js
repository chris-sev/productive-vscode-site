import {
  DuplicateIcon,
  SearchIcon,
  CodeIcon,
  CogIcon,
} from "@heroicons/react/outline";

export default function VSCodeActivityBar() {
  return (
    <div className="activity-bar h-full bg-gray-700 text-gray-500 flex flex-col justify-between py-2 text-center">
      {/* top icons */}
      <div className="flex flex-col">
        {/* files */}
        <button className="w-full text-center flex justify-center p-2 cursor-pointer hover:text-gray-300">
          <DuplicateIcon className="w-8 h-8" />
        </button>

        {/* search */}
        <button className="w-full text-center flex justify-center p-2 cursor-pointer hover:text-gray-300">
          <SearchIcon className="w-8 h-8" />
        </button>

        {/* git */}
        <button className="w-full text-center flex justify-center p-2 cursor-pointer hover:text-gray-300">
          <CodeIcon className="w-8 h-8" />
        </button>

        {/* project */}
        <button className="w-full text-center flex justify-center p-2 cursor-pointer hover:text-gray-300"></button>
      </div>

      {/* bottom icons */}
      <div>
        <button className="w-full text-center flex justify-center p-2 cursor-pointer hover:text-gray-300">
          <CogIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
