export default function SiteHeader() {
  return (
    <nav className="text-gray-800">
      <div className="px-8 max-w-7xl mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex space-x-1 items-end">
          <a
            href="#"
            className="block py-5 px-4 bebas font-extrabold text-4xl text-black"
          >
            Productive <strong className="text-red-600">VS Code</strong>
          </a>
          <span className="block py-5 text-sm text-gray-500">
            A Better Dev Course
          </span>
        </div>

        {/* nav */}
        <div className="flex">
          <a href="https://learn.better.dev/login" className="block py-5 px-4 ">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
