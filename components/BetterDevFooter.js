export default function BetterDevFooter() {
  return (
    <div className="text-sm text-gray-400 bg-gradient-to-br from-gray-700 to-black flex items-center justify-center space-x-5">
      <a href="https://better.dev" className="block py-4 hover:text-gray-100">
        A <strong className="text-gray-200 font-extrabold">Better Dev</strong>{" "}
        course
      </a>
      <div>|</div>
      <a
        href="https://app.usefathom.com/share/izcoegmk/productivevscode.com"
        className="block py-4 hover:text-gray-100"
      >
        View this site's Fathom analytics
      </a>
    </div>
  );
}
