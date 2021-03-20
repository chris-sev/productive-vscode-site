export default function Reasons() {
  return (
    <div className="lg:max-w-7xl mx-auto space-y-24">
      {/* header */}
      <div className="flex items-center justify-center">
        <h2 className="text-gray-700 text-5xl transform -rotate-1">
          <span className="block mb-2 text-3xl">
            Do you ever see someone code and say...
          </span>
          <span className="font-extrabold text-black">wait</span>{" "}
          <span role="img">😳</span> <span role="img">🤨</span>{" "}
          <span role="img">🤯</span>{" "}
          <span className="font-extrabold text-black">
            how'd they do that?!
          </span>
        </h2>
      </div>

      {/* content */}
      <div className="lg:max-w-2xl mx-auto space-y-10 text-gray-700 text-2xl leading-relaxed">
        <p className="">
          Spending time to learn your text editor may sound counterintuitive.
          (just let me get to the code!) But don't think of it as wasting time
          clicking around VS Code though; think of it as{" "}
          <strong className="font-bold italic">investing</strong> time into your
          text editor.
        </p>
        <p>
          VS Code is a feature packed editor with awesome things like:
          <ul className="text-xl mt-4 ml-6 text-gray-600 space-y-4">
            <li className="flex items-center space-x-2">
              <svg
                className="w-7 h-7 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span>Intellisense</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-7 h-7 text-pink-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <span>Built-in Git</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-7 h-7 text-violet-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                />
              </svg>
              <span>Built-in Terminal</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-7 h-7 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              <span>Debugging</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-7 h-7 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <span>Extensions</span>
            </li>
          </ul>
        </p>
        <h2 className="text-4xl leading-relaxed py-4">
          VS Code can do{" "}
          <strong className="italic font-extrabold bg-gradient-to-r from-cyan-400 to-light-blue-400 text-transparent bg-clip-text">
            so much more
          </strong>
          .
        </h2>
        <p>
          The best developers know how to squeeze productivity out of their
          editors.
        </p>
        <p className="text-gray-700 text-2xl">
          Learning how to use your text editor is one of the quickest
          investments you can do. With this 1-hour course, you will learn to be
          <span className="font-mono italic text-base inline-block mx-2 py-1 px-3 rounded bg-gray-200 text-pink-500">
            "that developer"
          </span>
          and people will be asking you "<span role="img">🤯</span> how did you
          do that?!"
        </p>
        <h2 className="text-4xl leading-relaxed py-4">
          Hi I'm{" "}
          <span className="font-extrabold bg-gradient-to-br from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Chris Sev
          </span>
          .
        </h2>
        <p>
          I started my career because of a text editor. I was given a copy of a
          text editor (Dreamweaver!). I looked at the price of Dreamweaver (too
          much for a kid) and thought "wow! this is expensive. i should try to
          figure this thing out." After seeing the terrible code Dreamweaver
          made, I learned to code to fix it.
        </p>
        <p>
          I've been putting in countless hours into perfecting my text editor
          setups. From Dreamweaver, to Vim, to Notepad++, to Sublime Text, Atom,
          Brackets, and now the amazing VS Code.
        </p>
        <p>
          Thanks to my text editors, I've become a fast and efficient coder.
          I've built and sold a successful blog that gained 4,000,000 monthly
          pageviews. I've built courses that sold $100,000 in 2020. Behind all
          of my success was the strength of a productive text editor.
        </p>
        <p>
          I'll put out tons of great resources and the first questions I'll get
          are "what font?" and "what theme?". TODO: make this look cooler.
        </p>
        <p>VIDEO HERE</p>
      </div>
    </div>
  );
}
