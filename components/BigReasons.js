import {
  LightningBoltIcon,
  CakeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function BigReasons() {
  return (
    <div className="relative px-8 max-w-7xl mx-auto">
      {/* absolute rectangles */}
      <div className="absolute -top-5 right-0 h-24 w-48 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800"></div>
      <div className="absolute -top-12 right-8 h-20 w-20 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500"></div>

      <div className="relative mb-20 space-y-5">
        <h2 className="font-bold text-gray-800 text-6xl">
          Learn VS Code and you'll:
        </h2>
        <p className="text-gray-700 text-5xl"></p>
      </div>

      <div className="relative space-y-12 text-gray-700 transform -translate-x-12">
        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-green-400 to-green-500">
            <LightningBoltIcon className="h-16 w-16 text-green-200" />
          </span>
          <span>Code</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-green-600 to-green-800 text-transparent bg-clip-text">
            Faster
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-red-400 to-red-500">
            <CakeIcon className="h-16 w-16 text-red-200" />
          </span>
          <span>Write</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-red-600 to-red-800 text-transparent bg-clip-text">
            Less Errors
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-500">
            <CurrencyDollarIcon className="h-16 w-16 text-blue-200" />
          </span>
          <span>Get More</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Done
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center transform translate-x-12">
          <BadgeCheckIcon className="h-32 w-32 text-yellow-400" />
          <span>
            Guaranteed
            <span className="ml-2 lg:ml-4 bg-gradient-to-b from-yellow-300 to-orange-400 text-transparent bg-clip-text">
              !
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
}
