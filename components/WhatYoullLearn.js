export default function YouWill() {
  return (
    <div className="py-32 bg-gray-100 text-gray-700">
      <div className="container mx-auto px-8">
        <div className="relative leading-loose mb-16 lg:mb-32">
          <h2 className="text-3xl lg:text-6xl text-center font-bold text-gray-800">
            What you'll learn in this course
          </h2>
          <div className="absolute left-0 top-0 w-1/3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded transform -translate-y-5"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded transform translate-y-5"></div>
        </div>

        <div className="lg:grid grid-cols-6 gap-10 space-y-6 lg:space-y-0">
          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">How to use Tailwind classes</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                We'll dive into the most important Tailwind classes and{" "}
                <strong className=" ">use them a TON</strong>. There are a lot
                of useful classes like spacing, backgrounds, borders, shadows,
                and typography. We'll type the Tailwind classes many times over
                to ensure that repeitition is our greatest learning tool.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Make good looking designs</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                There's a certain process to designing with Tailwind that we'll
                take to make our designs look good. Some easy to remember rules
                are all it takes to get a good design. We'll also talk about
                ideas and action items to{" "}
                <strong className=" ">
                  take a good design and make it great
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Why Tailwind is different/better</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                To be completely honest,{" "}
                <strong className=" ">I didn't like Tailwind at first</strong>.
                It felt like inline styles to me (and maybe still does). After
                using it more and more though, I've come to{" "}
                <strong className="font-bold text-red-700">
                  absolutely love it
                </strong>
                . I dread jumping into a project without Tailwind now.
              </p>
            </div>
          </div>

          <div className="col-span-3 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">
                How to build this site (
                <span className="italic text-teal-500">site-ception!</span>)
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p className="mb-4">
                The site you're on (
                <a
                  href="https://BeginnerTailwind.com"
                  className="text-blue-600 hover:underline"
                >
                  BeginnerTailwind.com
                </a>
                ) is built with Tailwind and{" "}
                <strong className="font-bold">has 0 custom css</strong>.
              </p>
              <p>
                You can take all of the code from this site and use it for your
                own landing pages or sites! All the code is available to you
                with course purchase.
              </p>
            </div>
          </div>

          <div className="col-span-3 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">A fun and methodical design process</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                I struggle with making things look good and don't consider
                myself a designer. What I try to do is have a formula for making
                things look good. I focus on design in this order: spacing, box
                properties, typography, fun element to pop. We'll talk about
                this all throughout the course.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Creating common components</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p className="mb-4">
                One of the first things we want to do when using Tailwind is to
                create components like cards, buttons, and forms. We'll build
                these out and see how Tailwind compares to CSS frameworks like
                Bootstrap.
              </p>
              <p>
                We'll also build out navigation, hero, pricing, newsletter, and
                footer components in this course.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Shrinking bundle sizes</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p className="mb-4">
                Tailwind comes with so many classes. It doesn't make sense to
                send all of those to our users' browsers. With{" "}
                <a
                  href="https://tailwindcss.com/docs/controlling-file-size"
                  className="text-blue-600 hover:underline"
                >
                  PostCSS and PurgeCSS
                </a>
                , we can shrink the amount of CSS we send to our users.
              </p>
              <p>
                We'll learn how to only send the classes that we actually use so
                that our{" "}
                <strong className="font-bold">
                  bundle sizes can drop to even below 10kb!
                </strong>
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Using Tailwind w/ React</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p className="mb-4">
                Tailwind's benefits really shine when you pair it with a
                JavaScript library/framework. Extracting classes into components
                is the recommended way to keep Tailwind DRY (don't repeat
                yourself).
              </p>
              <p>
                While we could use the{" "}
                <a
                  href="https://tailwindcss.com/docs/functions-and-directives#apply"
                  className="text-blue-600 hover:underline"
                >
                  @apply()
                </a>{" "}
                or{" "}
                <a
                  href="https://tailwindcss.com/docs/functions-and-directives#theme"
                  className="text-blue-600 hover:underline"
                >
                  theme()
                </a>{" "}
                functions, it forgoes some of the benefits of Tailwind. Namely
                we are once again creating a custom class and CSS.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">How to customize Tailwind</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                Tailwind is easily configurable for our own projects using the{" "}
                <a
                  href="https://tailwindcss.com/docs/configuration"
                  className="text-blue-500 hover:underline"
                >
                  tailwind.js config file
                </a>
                . We'll explore changing out fonts, colors, sizes, and more so
                that our Tailwind setups are custom and tailored to our
                projects.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Using Tailwind in VS Code</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                <a
                  href="https://code.visualstudio.com/"
                  className="text-blue-500 hover:underline"
                >
                  VS Code
                </a>{" "}
                is my favorite editor and Tailwind works fantastically in it.
                There are some essential plugins and setup for using Tailwind in
                VS Code. We'll go over each and use VS Code heavily in this
                course.
              </p>
            </div>
          </div>

          <div className="col-span-2 shadow flex flex-col rounded-lg">
            <div className="p-4 flex items-center justify-between border-2 border-gray-700 rounded-t-lg text-gray-700 font-bold">
              <h3 className="text-lg">Extending Tailwind</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow p-4 rounded-b-lg border-2 border-gray-700 border-t-0">
              <p>
                Learning Tailwind is just the beginning. There are some great
                tools like{" "}
                <a href="" className="text-blue-500 hover:underline">
                  Tailwind Typography
                </a>
                ,{" "}
                <a href="" className="text-blue-500 hover:underline">
                  Tailwind UI
                </a>
                ,{" "}
                <a href="" className="text-blue-500 hover:underline">
                  Tailwind Builder
                </a>
                , and more. We'll talk about some ways to extend Tailwind and
                ways we can go further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
