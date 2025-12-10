import Link from "next/link";
import { BsArrowReturnRight, BsBookmarkFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconBullet from "./IconBullet";
import FastFactsCard from "./FastFactsCard";
import Tooltip from "./Tooltip";
import { useState } from "react";
import { M_PLUS_1 } from "next/font/google";

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
            Whether I was doing math homework or trying to solve a gym leader puzzle in Pokemon White, I've always enjoyed solving problems.
            When I learned how to write code in high school, I saw how solving problems could help me build things I was passionate about.
            Since then, I've been studying computer science, working as a software engineer, and creating my own projects.
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
                </Link> I've worked on
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
              <Tooltip text="I don't post but I do try to keep my profile updated">
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

          {/* <div className="space-y-2">
            <p>Recipes:</p>
            <div className="ml-6 space-y-1">
              <p>
                <a
                  href="https://cooking.nytimes.com/recipes/1019037-classic-cheesecake?algo=cooking_search_relevance_metric_ios_and_web&fellback=false&imp_id=8068609243712446&req_id=7236574979289042&surface=cooking-search-web&variant=0_relevance_reranking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  NYT Cheesecake
                </a>
                : Lots of work, but worth it
              </p>
              <p>
                <a
                  href="https://shop.americastestkitchen.com/baking-for-two.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  Cooking for Two cookbook
                </a>
                : I like pretty much everything I've made from this book, but especially the bread pudding
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;