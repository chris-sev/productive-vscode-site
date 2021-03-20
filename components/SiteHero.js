import Image from "next/image";
import GetSamplesForm from "./GetSamplesForm";

export default function SiteHero() {
  return (
    <div className="mx-8 py-16 text-center relative bg-gradient-to-br from-violet-400 via-purple-600 to-fuchsia-700 rounded-lg overflow-hidden flex items-center justify-center">
      {/* content */}
      <div className="flex flex-col justify-center p-20 space-y-12 w-full">
        {/* giant title */}
        <h1 className="leading-none text-white font-extrabold fancy">
          <span className="block text-xl lg:text-4xl mb-3 lg:mb-5 uppercase tracking-wider text-purple-200">
            Productive
          </span>{" "}
          <span className="block text-4xl lg:text-9xl tracking-tigher">
            VS Code
          </span>
        </h1>

        {/* paragraph */}
        <div className="text-indigo-50 text-xl lg:text-2xl flex justify-center items-center">
          Change the way you VS Code in{" "}
          <div className="text-white font-extrabold ml-2">
            <One /> hour
          </div>
          .
        </div>

        <GetSamplesForm />
      </div>
    </div>
  );
}

function One() {
  return (
    <div className="inline-block relative">
      {/* top lines */}
      <div
        className="absolute -top-2.5 -left-2.5 w-0.5 h-3 bg-red-500 transform"
        style={{ "--tw-rotate": "-50deg" }}
      />
      <div className="absolute -top-4 left-1.5 w-0.5 h-3 bg-yellow-500" />
      <div
        className="absolute -top-2.5 -right-2.5 w-0.5 h-3 bg-blue-500 transform"
        style={{ "--tw-rotate": "50deg" }}
      />

      {/* bottom lines */}

      <div>1</div>
    </div>
  );
}
