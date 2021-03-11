export default function VSCodeHeader() {
  return (
    <div
      className="rounded-t flex items-center justify-between p-2 bg-gray-700"
    >
      {/* buttons */}
      <div className="flex space-x-1.5">
        <div className="h-3 w-3 bg-red-400 rounded-full"></div>
        <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
        <div className="h-3 w-3 bg-green-400 rounded-full"></div>
      </div>

      {/* text */}
      <div className="text-gray-300 text-sm">Make Your VS Code Awesome!</div>

      {/* empty */}
      <div></div>
    </div>
  );
}
