import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen px-6 pt-[10vh]"
      id="about"
    >
      <div className="flex flex-col items-center max-w-2xl w-full space-y-8">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-brown w-full pb-4">
          A little about me
        </h1>

        <div className="w-full max-w-lg rounded-lg overflow-hidden">
          <img
            src="/headshot_new.png"
            alt="Vishruth Raj"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6 text-brownMuted text-base md:text-lg leading-relaxed w-full text-left font-playfair">
          <p>
            I learned how to write code in high school and am now working as a software engineer.
          </p>

          <div className="space-y-3">
            <p className="font-playfair">Some of my favorite work includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proving the cloud is overrated at Roblox by deploying an OLAP database on-prem, saving $500k/year</li>
              <li>Delivering data-driven business insights by improving data pipelines at Klaviyo</li>
              <li>Solving problems for nonprofits at Hack4Impact UIUC</li>
            </ul>
          </div>

          <p>
            I'm always trying to work on something on the side (technical or otherwise). You can check out some of my projects{" "}
            <Link
              href="/projects"
              className="underline hover:text-brownDark transition-colors"
            >
              here
            </Link>
            .
          </p>

          <div className="space-y-3">
            <p>Some more fast facts about me since you've read this far:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>I am currently boxing for the Fighting Illini</li>
              <li>I enjoy playing pretty much any sport, most recently, I’ve been playing a lot of volleyball</li>
              <li>I like baking, I’ll link some of my favorite recipes below</li>
              <li>I dunked a basketball once in my life</li>
              <li>
                I am the third most famous Vishruth Raj, behind an{" "}
                <a
                  href="https://www.sammprada.com/our-doctors/dr-vishrut-raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  accomplished doctor
                </a>{" "}
                and a{" "}
                <a
                  href="https://indiabookofrecords.in/fastest-child-to-recite-counting-from-1-100-vishruth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  child who counts very fast
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p>Check me out on the internet:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/vishruth-raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  LinkedIn
                </a>
                : Obligatory
              </li>
              <li>
                <a
                  href="https://github.com/VishruthR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  GitHub
                </a>
                : I like coding, I try to make everything I write public
              </li>
              <li>
                <a
                  href="https://substack.com/@pokelord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  Substack
                </a>
                : I like writing about projects I work on, books I read, or thoughts I have
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Recipes:</p>
            <div className="ml-6 space-y-1">
              <p>NYT Cheesecake: Lots of work, but worth it</p>
              <p>Mac n' Cheese: Great for friendsgiving</p>
              <p>
                Book Vy got me: Sorta cheating, but I like pretty much everything I've made from this book
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

