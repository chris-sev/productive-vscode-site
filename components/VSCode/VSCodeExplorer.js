const files = [
  { name: "components", icon: "", isFolder: true },
  { name: "node_modules", icon: "", isFolder: true },
  {
    name: "pages",
    icon: "",
    isFolder: true,
    files: [
      { name: "_app.js", icon: "" },
      { name: "index.js", icon: "" },
    ],
  },
  { name: "public", icon: "", isFolder: true },
  { name: "styles", icon: "", isFolder: true },
  { name: ".gitignore", icon: "" },
  { name: "package-lock.json", icon: "" },
  { name: "README.md", icon: "" },
  { name: "tailwind.config.js", icon: "" },
];

export default function VSCodeExplorer() {
  return (
    <div className="bg-gray-800 text-gray-300 text-lg h-full py-4">
      {files.map(({ name, icon, isFolder, files }, index) => (
        <button
          key={index}
          className="flex w-full space-x-2 py-0.5 px-5 cursor-pointer hover:bg-gray-700"
        >
          {isFolder && <span>&gt;</span>}
          {icon && <span>icon</span>}
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
}
