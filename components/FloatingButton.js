export default function FloatingButton({ isShowing }) {
  return (
    <div
      className="fixed right-0 top-0 mt-4 mr-4 z-50 transform transition duration-300"
      style={{ transform: isShowing ? "translateX(0)" : "translateX(200%)" }}
    >
      <a
        href="#get"
        className="text-sm inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-800 shadow-xl rounded py-3 px-4 transition-colors"
      >
        Buy the Course
      </a>
    </div>
  );
}
