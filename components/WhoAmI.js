export default function WhoAmI() {
  return (
    <div className="lg:max-w-7xl mx-auto space-y-24">
      <h2 className="text-4xl leading-relaxed py-4 flex items-center">
        <span>Hi I'm</span>{" "}
        <a
          href="https://twitter.com/chris__sev"
          className="ml-2 font-extrabold bg-gradient-to-br from-violet-400 to-purple-500 bg-clip-text text-transparent flex items-center border-b-2 hover:border-purple-500"
        >
          <span>Chris Sev</span>
          <img src="/notion-avatar.jpg" className="h-16" />
        </a>
        .
      </h2>
      <p>
        I started my career in coding 20 years ago because of a text editor. I
        was given a copy of a text editor (Dreamweaver!). I looked at the price
        of Dreamweaver (too much for a kid) and thought "wow! this is expensive.
        I should try to figure this thing out." After seeing the terrible code
        Dreamweaver made, I learned to code to fix it.
      </p>
      <p>
        I've put in{" "}
        <strong className="font-bold text-yellow-500">countless hours</strong>{" "}
        into perfecting my text editor setups. From{" "}
        <span data-tip="hello world">Dreamweaver</span>, to Vim, to Notepad++,
        to Sublime Text, Atom, Brackets, and now the amazing VS Code.
      </p>
      <p>
        Thanks to my text editors, I've become a fast and efficient coder. I've
        built and sold a successful blog that gained 4,000,000 pageviews/mo.
        I've built courses that sold $100,000 in 2020.{" "}
        <strong className="font-extrabold text-green-500">
          Behind all of my success was the strength of a productive text editor
        </strong>
        .
      </p>
    </div>
  );
}
