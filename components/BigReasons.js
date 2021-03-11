export default function BigReasons() {
  return (
    <div className="relative px-8 max-w-7xl mx-auto">
      {/* absolute rectangles */}
      <div className="absolute -top-5 right-0 h-24 w-1/4 rounded-lg bg-gradient-to-br from-green-300 to-green-500"></div>

      <div className="relative mb-20 space-y-5">
        <h2 className="font-bold text-gray-900 text-4xl">
          The best developers know their{" "}
          <span className="text-blue-600">VS Code</span> from back to front.
        </h2>
        <p className="text-gray-700 text-5xl">
          Invest in your editor and you'll:
        </p>
      </div>

      <div className="relative space-y-12 text-gray-700">
        <h3 className="font-extrabold text-8xl ">
          Code{" "}
          <span className="bg-gradient-to-br from-green-600 to-green-800 text-transparent bg-clip-text">
            Faster
          </span>
        </h3>

        <h3 className="font-extrabold text-8xl">
          Write{" "}
          <span className="bg-gradient-to-br from-red-600 to-red-800 text-transparent bg-clip-text">
            Less Errors
          </span>
        </h3>

        <h3 className="font-extrabold text-8xl">
          Get More{" "}
          <span className="bg-gradient-to-br from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Done
          </span>
        </h3>
      </div>
    </div>
  );
}
