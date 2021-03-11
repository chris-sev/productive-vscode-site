export default function TimeIsMoney() {
  return (
    <div className="relative px-8 max-w-7xl mx-auto">
      <div className="space-y-5 text-center">
        <h2 className="text-black text-8xl font-extrabold">
          Your Time is Worth <Money />
        </h2>
        <p className="text-gray-600 text-4xl">
          Save <strong className="font-bold text-gray-800">30 minutes</strong>{" "}
          every day with this course.
        </p>
      </div>
    </div>
  );
}

function Money() {
  return (
    <span className="relative">
      <MoneyIcon className="h-8 w-8 text-green-400 absolute top-8 -left-4 animate-pulse" />
      <MoneyIcon className="h-12 w-12 text-green-400 absolute -top-2 -right-4 animate-pulse" />
      <MoneyIcon className="h-14 w-14 text-green-400 absolute -bottom-2 left-1/2 animate-pulse" />
      <MoneyIcon className="h-4 w-4 text-green-400 absolute top-2 left-20 animate-pulse" />

      <span className="relative font-extrabold text-green-800">Money</span>
    </span>
  );
}

function MoneyIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
