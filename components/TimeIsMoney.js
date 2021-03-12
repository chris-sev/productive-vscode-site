import { useState } from "react";

export default function TimeIsMoney() {
  const [hourlyRate, setHourlyRate] = useState(100);
  const [timeSaved, setTimeSaved] = useState(30);

  return (
    <div className="relative px-8 max-w-7xl mx-auto">
      {/* header */}
      <div className="space-y-5 text-center">
        <h2 className="text-black text-8xl font-extrabold">
          Your Time is Worth <Money />
        </h2>
        <p className="text-gray-600 text-4xl">
          Save{" "}
          <strong className="font-bold text-gray-800">valuable time</strong>{" "}
          every day with this course.
        </p>
      </div>

      {/* content */}
      <div>
        My hourly rate is{" "}
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
        .
      </div>
      <div>
        This course will save me{" "}
        <input
          type="number"
          value={timeSaved}
          onChange={(e) => setTimeSaved(e.target.value)}
        />{" "}
        minutes every day.
      </div>
    </div>
  );
}

function Money() {
  return (
    <span className="relative">
      <MoneyIcon
        className="h-8 w-8 text-green-400 absolute top-8 -left-4 animate-spin"
        style={{ animationDuration: "5s" }}
      />
      <MoneyIcon
        className="h-12 w-12 text-green-400 absolute -top-2 -right-4 animate-spin"
        style={{ animationDuration: "15s" }}
      />
      <MoneyIcon
        className="h-14 w-14 text-green-400 absolute -bottom-2 left-1/2 animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <MoneyIcon
        className="h-4 w-4 text-green-400 absolute top-2 left-20 animate-spin"
        style={{ animationDuration: "30s" }}
      />

      <span className="relative font-extrabold text-green-800">Money</span>
    </span>
  );
}

function MoneyIcon({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
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
