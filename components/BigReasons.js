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

      <div className="relative space-y-12">
        <h3 className="font-extrabold text-8xl bg-gradient-to-br from-green-600 to-green-800 text-transparent bg-clip-text">
          Code Faster
        </h3>

        <h3 className="font-extrabold text-8xl bg-gradient-to-br from-red-600 to-red-800 text-transparent bg-clip-text">
          Write Less Errors
        </h3>

        <h3 className="font-extrabold text-8xl bg-gradient-to-br from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Get More Done
        </h3>
      </div>
    </div>
  );
}
