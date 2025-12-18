import Link from "next/link";
import Image from "next/image";
import { BsArrowReturnRight, BsBookmarkFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconBullet from "./IconBullet";
import FastFactsCard from "./FastFactsCard";
import Tooltip from "./Tooltip";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen px-6 md:pt-[8vh] sm:pt-[5vh]"
      id="about"
    >
      <div className="flex flex-col items-center max-w-2xl w-full space-y-8">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-brown w-full pb-4">
          A little about me
        </h1>

        <div className="w-full max-w-lg rounded-lg overflow-hidden relative">
          <Image
            src="/headshot_new.png"
            alt="Vishruth Raj"
            width={512}
            height={512}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, 512px"
            priority
          />
        </div>

        <div className="flex flex-col space-y-6 text-brownMuted text-base md:text-lg leading-relaxed w-full text-left font-playfair">
          <p>
            Whether I was doing math homework or trying to solve a gym leader puzzle in Pokemon White, I&apos;ve always enjoyed solving problems.
            When I learned how to write code in high school, I saw how solving problems could help me build things I was passionate about.
            Since then, I&apos;ve been studying computer science, working as a software engineer, and creating my own projects.
          </p>

          <div className="space-y-3">
            <p className="font-playfair">Some of my favorite work includes:</p>
            <ul className="space-y-2 ml-4">
              <IconBullet icon={BsArrowReturnRight}>
                Proving the cloud is overrated at Roblox by deploying an OLAP database on-prem, saving $500k/year
              </IconBullet>
              <IconBullet icon={BsArrowReturnRight}>
                Delivering data-driven business insights by improving data pipelines at Klaviyo
              </IconBullet>
              <IconBullet icon={BsArrowReturnRight}>
                Helping nonprofits increase their impact thru Hack4Impact UIUC
              </IconBullet>
              <IconBullet icon={BsArrowReturnRight}>
                And, the{" "}
                <Link
                  href="/projects"
                  className="underline hover:text-brownDark transition-colors"
                >
                  projects
                </Link> I&apos;ve worked on
              </IconBullet>
            </ul>
          </div>

          <div className="space-y-3">
            <p>Some more fast facts about me:</p>
            <FastFactsCard />
          </div>

          <div className="space-y-3">
            <p>Check me out elsewhere:</p>
            <div className="flex justify-center gap-12 mt-8 pt-4">
              <Tooltip text="I don&apos;t post but I do try to keep my profile updated">
                <a
                  href="https://www.linkedin.com/in/vishruth-raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="text-brownMuted hover:text-brownDark transition-colors"
                  />
                </a>
              </Tooltip>
              <Tooltip text="I like coding, and I try to make everything I write public">
                <a
                  href="https://github.com/VishruthR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={32}
                    className="text-brownMuted hover:text-brownDark transition-colors"
                  />
                </a>
              </Tooltip>
              <Tooltip text="I write about my projects, books I read, or thoughts I have">
                <a
                  href="https://substack.com/@pokelord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBookmarkFill
                    size={32}
                    className="text-brownMuted hover:text-brownDark transition-colors"
                  />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;