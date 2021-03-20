export default function SiteHeader() {
  return (
    <nav className="py-4 text-gray-700">
      <div className="px-8 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="block pt-6 pb-4 px-4 fancy font-extrabold tracking-tighter text-2xl leading-none text-black"
          >
            Productive{" "}
            <strong className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-600 to-purple-700">
              VS Code
            </strong>
          </a>
        </div>

        {/* nav */}
        <div className="flex space-x-2 items-center">
          <a
            href="https://learn.better.dev/login"
            className="block py-5 px-4 text-gray-700"
          >
            Login
          </a>
          <a
            href="https://learn.better.dev/login"
            className="block py-2 px-4 rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 text-white"
          >
            Buy Course
          </a>
        </div>
      </div>
    </nav>
  );
}
