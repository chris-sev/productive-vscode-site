import Image from "next/image";
import GetSamplesForm from "./GetSamplesForm";

export default function SiteHero() {
  return (
    <div className="mx-8 py-28 text-center relative bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900 rounded-lg overflow-hidden flex items-center justify-center">
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
        <p className="text-indigo-50 text-xl lg:text-2xl">
          Change the way you VS Code in{" "}
          <span className="text-white font-extrabold">
            <One /> hour
          </span>
          .
        </p>

        <GetSamplesForm />
      </div>
    </div>
  );
}

function One() {
  return (
    <span className="inline-block relative">
      {/* top lines */}
      <div
        className="absolute -top-2.5 -left-2.5 w-0.5 h-3 bg-yellow-200 transform"
        style={{ "--tw-rotate": "-50deg" }}
      />
      <div className="absolute -top-4 left-2 w-0.5 h-3 bg-yellow-200" />
      <div
        className="absolute -top-2.5 -right-2.5 w-0.5 h-3 bg-yellow-200 transform"
        style={{ "--tw-rotate": "50deg" }}
      />

      {/* bottom lines */}

      <span>1</span>
    </span>
  );
}
