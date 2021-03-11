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
        <p className="text-gray-700 text-3xl">
          Being an expert in the tool makes us better in the craft.
        </p>
      </div>

      <div className="relative space-y-8">
        <h3 className="font-extrabold text-5xl bg-gradient-to-br from-gray-800 to-black text-transparent bg-clip-text">
          Faster
        </h3>

        <h3 className="font-extrabold text-5xl bg-gradient-to-br from-gray-800 to-black text-transparent bg-clip-text">
          Optimized
        </h3>

        <h3 className="font-extrabold text-5xl bg-gradient-to-br from-gray-800 to-black text-transparent bg-clip-text">
          Better
        </h3>
      </div>
    </div>
  );
}
