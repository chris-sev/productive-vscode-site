import SignupForm from "./SignupForm";

export default function SiteHero() {
  return (
    <div className="mt-8 mx-8 pt-28 pb-12 text-center relative bg-purple-600 rounded-lg border-4 border-purple-900">
      {/* giant title */}
      <h1 className="leading-none text-white font-extrabold fancy">
        <span className="font-normal block text-xl lg:text-3xl mb-3 lg:mb-4 uppercase tracking-wider text-purple-200">
          Productive
        </span>{" "}
        <span className="block text-5xl lg:text-9xl tracking-tigher">
          VS Code
        </span>
      </h1>

      {/* paragraph */}
      <div className="mt-8 mb-12 text-indigo-50 text-xl lg:text-2xl flex justify-center items-center">
        Change the way you VS Code in{" "}
        <div className="text-white font-extrabold ml-2">
          <One /> hour
        </div>
        .
      </div>

      <SignupForm />

      {/* a 10x developer */}
      <div className="transform translate-y-28 max-w-5xl mx-auto bg-purple-800 text-purple-100 border-4 border-purple-900 px-8 py-12 rounded">
        <p className="text-3xl mb-12">
          Every <strong className="font-extrabold text-white">10x</strong>{" "}
          developer knows how to use their editor to the{" "}
          <strong className="font-extrabold text-white">max</strong>
        </p>

        <div className="max-w-[65ch] mx-auto space-y-4 text-2xl text-purple-300">
          <p>
            A 10x developer has the best{" "}
            <strong className="border-b border-purple-400 text-white">
              settings and extensions
            </strong>
          </p>
          <p>
            A 10x developer knows the{" "}
            <strong className="border-b border-purple-400 text-white">
              keyboard shortcuts
            </strong>
          </p>
          <p>
            A 10x developer employs{" "}
            <strong className="border-b border-purple-400 text-white">
              productive workflows
            </strong>
          </p>
          <p>
            <strong className="border-b border-purple-400 text-white">
              You
            </strong>{" "}
            can be that 10x developer!
          </p>
        </div>
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
