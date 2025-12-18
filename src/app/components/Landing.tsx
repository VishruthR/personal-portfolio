"use client";

import { useHydrated } from "@/hooks/useHydrated";
import Link from "next/link";

const Landing = () => {
  const hydrated = useHydrated();

  if (!hydrated) {
    return null;
  }

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen px-6 pt-[15vh]"
      id="landing"
    >
      <div className="flex flex-col max-w-2xl space-y-12">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-brown whitespace-nowrap">
          Hey, I&apos;m Vishruth
        </h1>

        <div className="flex flex-col space-y-4 text-brownMuted text-base md:text-lg leading-relaxed font-playfair">
          <p>
            I&apos;m a master&apos;s student studying computer science at the University
            of Illinois - Urbana Champaign. I enjoy solving hard problems, especially in data and infrastructure.
            
            I&apos;ve previously worked at Roblox, Klaviyo, and Hack4Impact UIUC.
          </p>

          <p className="font-playfair">
            If you want to learn more about my professional experience, check out my{" "}
            <a
              href="/VishruthRajResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brownDark transition-colors"
            >
              resume
            </a>
          </p>

          <p className="font-playfair">
            Read more about{" "}
            <Link
              href="/about"
              className="underline hover:text-brownDark transition-colors"
            >
              me
            </Link>
          </p>

          <p className="font-playfair">
            HMU at{" "}
            <a
              href="mailto:vishraj248@gmail.com"
              className="underline hover:text-brownDark transition-colors"
            >
              vishraj248@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
