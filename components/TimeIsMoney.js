import { useState } from "react";

export default function TimeIsMoney() {
  const [hourlyRate, setHourlyRate] = useState(100);
  const [minutesSavedDaily, setMinutesSavedDaily] = useState(10); // in minutes

  const hoursSavedPerYear = ((minutesSavedDaily * 261) / 60)
    .toFixed(1)
    .toLocaleString();
  const moneySavedPerYear = (hoursSavedPerYear * hourlyRate).toLocaleString();

  return (
    <div className="relative pb-72">
      <div className="absolute inset-x-0 top-28 lg:top-56 w-full h-96 transform -skew-y-6 bg-green-500"></div>

      {/* header */}
      <div className="relative space-y-5 text-center px-8">
        <h2 className="text-black text-6xl lg:text-8xl font-extrabold">
          Your Time is Worth <Money />
        </h2>
        <p className="text-gray-600 text-3xl lg:text-4xl">
          Save{" "}
          <strong className="font-bold text-gray-800">
            {hoursSavedPerYear} hours
          </strong>{" "}
          (
          <strong className="font-bold text-gray-800">
            ${moneySavedPerYear}
          </strong>
          ) yearly with this course.
        </p>
      </div>

      {/* calculator */}
      <div className="relative mt-20 px-8 max-w-7xl mx-auto text-center grid grid-cols-11 gap-8">
        <div className="col-span-3 space-y-5">
          <input
            className="block w-full py-5 px-10 bg-white focus:outline-none focus:bg-green-200 rounded-2xl text-center text-6xl lg:text-9xl shadow-2xl transform rotate-2"
            type="text"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
          <div className="text-xl text-green-800 font-bold">My Hourly Rate</div>
        </div>
        <div className="font-mono font-extrabold flex items-center justify-center text-6xl lg:text-9xl bg-gradient-to-br from-purple-500 to-purple-900 text-transparent bg-clip-text pb-10">
          *
        </div>
        <div className="col-span-3 space-y-5">
          <input
            className="block w-full py-5 px-10 bg-white focus:outline-none focus:bg-green-200 rounded-2xl text-center text-6xl lg:text-9xl shadow-2xl transform -rotate-2"
            type="text"
            value={minutesSavedDaily}
            onChange={(e) => setMinutesSavedDaily(e.target.value)}
          />
          <div className="text-xl text-green-800 font-bold">
            Minutes Saved Daily
          </div>
        </div>
        <div className="font-mono font-extrabold flex items-center justify-center text-6xl lg:text-9xl bg-gradient-to-br from-purple-500 to-purple-900 text-transparent bg-clip-text pb-10 transform -rotate-2">
          =
        </div>
        <div className="col-span-3 relative space-y-5 flex flex-col justify-center items-center transform rotate-2">
          <div className="text-3xl lg:text-5xl text-green-100 font-extrabold">
            {hoursSavedPerYear} <span className="text-green-400">hours</span>
          </div>
          <div className="text-3xl lg:text-5xl text-green-100 font-extrabold">
            ${moneySavedPerYear}
          </div>
          <div className="text-xl text-green-800 font-bold">
            Saved Per Year!
          </div>
          <div className="absolute -bottom-20 lg:bottom-0 text-green-200 pl-10 transform rotate-3">
            (This course is only $35!)
          </div>
        </div>
      </div>
    </div>
  );
}

function Money() {
  return (
    <span className="relative">
      <MoneyIcon
        className="h-4 lg:h-8 w-4 lg:w-8 text-green-400 absolute top-8 -left-4 animate-spin"
        style={{ animationDuration: "5s" }}
      />
      <MoneyIcon
        className="h-6 lg:h-12 w-6 lg:w-12 text-green-400 absolute -top-2 -right-4 animate-spin"
        style={{ animationDuration: "15s" }}
      />
      <MoneyIcon
        className="h-7 lg:h-14 w-7 lg:w-14 text-green-400 absolute -bottom-2 left-1/2 animate-spin"
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
