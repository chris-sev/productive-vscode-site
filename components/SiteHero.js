import Image from "next/image";

export default function SiteHero() {
  return (
    <div className="px-8">
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900 rounded-lg flex p-20 lg:p-40">
        {/* content */}
        <div className="lg:grid lg:grid-cols-2">
          <div className="space-y-10">
            {/* giant title */}
            <h1 className="leading-none text-white font-extrabold fancy">
              <span className="block text-xl lg:text-3xl mb-3 lg:mb-8 uppercase tracking-wider">
                Productive
              </span>{" "}
              <span className="block text-6xl lg:text-9xl tracking-tigher">
                VS Code
              </span>
            </h1>

            {/* paragraph */}
            <p className="text-indigo-50 text-xl lg:text-3xl">
              Change the way you VS Code in{" "}
              <span className="text-white font-extrabold">
                <One /> hour
              </span>
              .
            </p>

            {/* buy now */}
            <a
              href="#"
              className="inline-block text-lg lg:text-2xl py-4 lg:py-6 px-10 lg:px-12 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-black transition-colors duration-300"
            >
              Buy the Course
            </a>
          </div>
        </div>

        {/* cool vs code preview with buttons */}
        <div className="absolute top-20 -bottom-10 -right-10 shadow-2xl">
          <div className="hero-vscode h-full w-96 rounded-lg">
            <Image
              src="/vscode.png"
              layout="fill"
              objectPosition="left"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
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
