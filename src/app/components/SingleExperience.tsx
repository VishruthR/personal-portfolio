"use client";

import { BsArrowUpRight } from "react-icons/bs";
import Pill from "./Pill";
import { BREAKPOINTS } from "@/data/utils";
import { useBreakpoint } from "use-breakpoint";
import { useHydrated } from "@/hooks/useHydrated";

interface Experience {
  name: string;
  position: string;
  year: string;
  description: string;
  link: string;
  skills: string[];
}

interface SingleExperienceProps {
  experience: Experience;
}

export const SingleExperience = ({ experience }: SingleExperienceProps) => {
  const hydrated = useHydrated();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobile = breakpoint === "mobile";

  if (!hydrated) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="border-2 h-full border-backgroundBlack rounded-md space-y-4">
        <a href={experience.link} target="_blank">
          <div className="flex items-center">
            <p className="text-white font-bold mr-2 leading-none">
              {experience.name}
            </p>
            <BsArrowUpRight color="white" size={20} />
          </div>
        </a>
        <p className="text-white text-sm">
          {experience.year} • {experience.position}
        </p>
        <p className="text-white">{experience.description}</p>
        <div className="flex flex-wrap space-x-2">
          {experience.skills.map((skill) => (
            <Pill
              key={`experience-skill-${experience.name}-${skill}`}
              text={skill}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <a href={experience.link} target="_blank">
      <div className="flex flex-col justify-between border-2 h-full border-backgroundBlack hover:bg-white hover:bg-opacity-10 hover:border-white hover:border-opacity-30 rounded-md space-y-4 p-3">
        <div className="space-y-4">
          <div className="flex items-center">
            <p className="text-white font-bold mr-2 leading-none">
              {experience.name}
            </p>
            <BsArrowUpRight color="white" size={20} />
          </div>
          <p className="text-white text-sm">
            {experience.year} • {experience.position}
          </p>
          <p className="text-white">{experience.description}</p>
        </div>
        <div className="flex flex-wrap space-x-2">
          {experience.skills.map((skill) => (
            <Pill
              key={`experience-skill-${experience.name}-${skill}`}
              text={skill}
            />
          ))}
        </div>
      </div>
    </a>
  );
};
