import Image from "next/image";

export default function SiteHero() {
  return (
    <div className="px-8">
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900 rounded-lg flex">
        {/* content */}
        <div className="w-full lg:grid lg:grid-cols-2 gap-x-10">
          <div className="flex flex-col justify-center p-20 space-y-12">
            {/* giant title */}
            <h1 className="leading-none text-white font-extrabold fancy">
              <span className="block text-xl lg:text-2xl mb-3 lg:mb-5 uppercase tracking-wider text-purple-200">
                Productive
              </span>{" "}
              <span className="block text-4xl lg:text-7xl tracking-tigher">
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

            {/* buy now */}
            <a
              href="#"
              className="inline-block text-lg lg:text-2xl py-3 lg:py-5 px-6 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-black hover:shadow-2xl transition duration-300"
            >
              Buy the Course
            </a>
          </div>

          {/* cool vs code preview with buttons */}
          {/* <div className="absolute top-20 -bottom-10 -right-10 shadow-2xl"> */}
          <div className="relative min-h-screen w-full mt-20 rounded-tl-lg rounded-br-lg">
            <Image
              src="/vscode.png"
              layout="fill"
              objectPosition="left"
              sizes="(max-width: 1280px) 1vw, 1vw"
              className="rounded-tl-lg rounded-br-lg object-fit"
            />
          </div>
          {/* </div> */}
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
