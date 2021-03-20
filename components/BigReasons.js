export default function BigReasons() {
  return (
    <div className="relative px-8 max-w-7xl mx-auto">
      {/* absolute rectangles */}
      <div className="absolute -top-5 right-0 h-24 w-48 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800"></div>
      <div className="absolute -top-12 right-8 h-20 w-20 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500"></div>

      <div className="relative mb-20 space-y-5">
        <h2 className="font-bold text-gray-800 text-6xl">
          Learn VS Code and you'll:
        </h2>
        <p className="text-gray-700 text-5xl"></p>
      </div>

      <div className="relative space-y-12 text-gray-700 transform -translate-x-12">
        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-green-400 to-green-500">
            <svg
              className="h-16 w-16 text-green-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
          <span>Code</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-green-600 to-green-800 text-transparent bg-clip-text">
            Faster
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-red-400 to-red-500">
            <svg
              className="h-16 w-16 text-red-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
          </span>
          <span>Write</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-red-600 to-red-800 text-transparent bg-clip-text">
            Less Errors
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center">
          <span className="transform translate-x-12 group-hover:translate-x-6 transition duration-200 ease-in-out w-28 py-6 mr-4 lg:mr-8 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-500">
            <svg
              className="h-16 w-16 text-blue-200"
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
          </span>
          <span>Get More</span>
          <span className="ml-2 lg:ml-4 bg-gradient-to-br from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Done
          </span>
        </h3>

        <h3 className="group font-extrabold text-4xl lg:text-8xl flex items-center transform translate-x-12">
          <svg
            className="h-32 w-32 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Guaranteed
            <span className="ml-2 lg:ml-4 bg-gradient-to-b from-yellow-300 to-orange-400 text-transparent bg-clip-text">
              !
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
}
