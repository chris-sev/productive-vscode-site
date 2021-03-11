export default function VSCodeTabBar() {
  return (
    <div className="flex bg-gray-900">
      <button
        className="py-3 px-8 text-gray-400 cursor-pointer focus:outline-none"
        style={{ background: "#1e1e1e" }}
      >
        package.json
      </button>
      <button className="py-3 px-8 bg-gray-800 text-gray-400 cursor-pointer focus:outline-none">
        index.js
      </button>
      <button className="py-3 px-8 bg-gray-800 text-gray-400 cursor-pointer focus:outline-none">
        VSCode.js
      </button>
    </div>
  );
}
