"use client";

/* eslint-disable @next/next/no-img-element */
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS, skills } from "../../data/utils";
import Contact from "./Contact";
import Pill from "./Pill";
import { useHydrated } from "@/hooks/useHydrated";

const Landing = () => {
  const hydrated = useHydrated();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobile = breakpoint === "mobile";
  const isDesktop = breakpoint === "desktop";

  if (!hydrated) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="flex flex-col w-full py-10 mb-8 space-y-2" id="landing">
        <div>
          <p className="text-white font-bold mg:text-5xl md:text-4xl sm:text-4xl">{`Vishruth Raj`}</p>
        </div>
        <div>
          <p className="text-white font-bold">CS @ UIUC</p>
        </div>
        <Contact />
        <div className="flex flex-col w-full justify-center lg:items-center items-center md:items-end">
          <div className="max-w-[360px] max-h-[360px] w-11/12 h-11/12 rounded-full overflow-hidden mb-4">
            <img
              src="/headshot_new.png"
              alt="Headshot"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full py-10 mb-8" id="landing">
      <div className="flex flex-col w-1/2 justify-around">
        <div>
          <div>
            <p className="text-white font-bold mg:text-5xl md:text-4xl">Hi,</p>
            <p className="text-white font-bold mg:text-5xl md:text-4xl">{`I'm Vishruth Raj`}</p>
          </div>
          <div>
            <p className="text-white font-bold text-lg opacity-90 mt-3">
              CS @ UIUC
            </p>
          </div>
        </div>
        <div>
          <p className="text-white opacity-75 max-w-[500px]">
            {`I'm currently pursuing a Professional Master's in Computer Science at UIUC. In the past, I've been a technical lead @ Hack4Impact and a SWE intern @ Roblox and Klaviyo.`}
          </p>
        </div>
        {isDesktop && (
          <div>
            <p className="text-white opacity-75 max-w-[500px]">
              {`I’m a huge fan of all sports and love to stay active in my free time. I’m also very passionate about education accessibility and equity.`}
            </p>
          </div>
        )}
        <Contact />
      </div>
      <div className="flex flex-col w-1/2 justify-center lg:items-center md:items-end">
        <div className="lg:w-7/12 lg:h-9/12  md:w-9/12 md:h-11/12 rounded-full overflow-hidden mb-4">
          <img
            src="/headshot_new.png"
            alt="Headshot"
            className="w-full h-full"
          />
        </div>
        <div className="flex lg:w-7/12 md:w-9/12 flex-wrap justify-center space-x-2">
          {skills.map((skill) => (
            <Pill key={`pill-${skill}`} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
