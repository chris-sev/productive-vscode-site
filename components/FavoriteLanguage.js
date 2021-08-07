import {
  SiJavascript,
  SiCsswizardry,
  SiTypescript,
  SiPhp,
  SiCsharp,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";

export default function FavoriteLanguage() {
  return (
    <div className="relative px-8 mt-24 max-w-7xl mx-auto">
      {/* background gradients */}
      <div className="absolute top-12 left-10 z-10 bg-gray-100 rounded-lg h-3/4 w-full lg:w-3/4"></div>
      {/* <div className="absolute -top-4 right-20 z-20 bg-purple-600 rounded-lg h-24 w-1/3"></div> */}

      <div className="relative z-50 pt-24 pl-24">
        {/* tagline */}
        <h2 className="mb-12 text-5xl font-extrabold text-gray-500">
          <span className="block text-3xl mb-3">
            Learn settings and extensions for your
          </span>{" "}
          <span className="text-black tracking-wide">
            favorite language or framework
          </span>
        </h2>

        <div className="grid grid-cols-7">
          <div>
            <SiJavascript className="h-24 w-24 text-yellow-400" />
          </div>
          <div>
            <SiCsswizardry className="h-24 w-24 text-blue-400" />
          </div>
          <div>
            <RiReactjsLine className="h-24 w-24 text-blue-500" />
          </div>
          <div>
            <SiTypescript className="h-24 w-24 text-blue-600" />
          </div>
          <div>
            <SiPhp className="h-24 w-24 text-purple-600" />
          </div>
          <div>
            <FaLaravel className="h-24 w-24 text-pink-400" />
          </div>
          <div>
            <SiCsharp className="h-24 w-24 text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
