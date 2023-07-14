/* eslint-disable @next/next/no-img-element */

import { BREAKPOINTS } from "@/data/utils";
import { useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BiSolidChevronRight, BiSolidChevronDown } from "react-icons/bi";
import { useBreakpoint } from "use-breakpoint";

interface Project {
  name: string;
  sentence: string;
  description: string;
  live: string | null;
  github: string | null;
  screenshot: string;
  skills: string[];
}

interface ProjectProps {
  project: Project;
}

export const Project = ({ project }: ProjectProps) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [expanded, setExpanded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const isMobile = breakpoint === "mobile";

  const toggleExpanded = () => {
    setExpanded(!expanded);

    const timeout = expanded ? 20 : 100;

    setTimeout(() => {
      setShowDescription(!showDescription);
    }, timeout);
  };

  return (
    <div className="flex flex-col justify-between bg-darkGray rounded-md max-w-[350px] w-full h-full pt-3">
      <div className="space-y-4 px-3">
        {project.screenshot && (
          <div
            className={`max-w-[350px] max-h-[200px] overflow-hidden rounded-md transition-all ease-in-out duration-200 ${
              expanded ? "h-0" : "h-[180px]"
            }`}
          >
            <img
              src={project.screenshot}
              alt={`Project ${project.name} screenshot`}
            />
          </div>
        )}
        <div className="space-y-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleExpanded}
          >
            <p className="text-white font-bold mr-2 leading-none">
              {project.name}
            </p>
            {expanded ? (
              <BiSolidChevronDown color="white" />
            ) : (
              <BiSolidChevronRight color="white" />
            )}
          </div>
          <p
            className={`text-white transition-all ease-in-out duration-200 ${
              expanded ? "h-[200px]" : "h-6"
            }`}
          >
            {showDescription ? project.description : project.sentence}
          </p>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap space-x-2">
            {project.skills.map((skill, i) => (
              <p
                className="text-sm text-white opacity-50"
                key={`${project.name}-skill-${skill}`}
              >
                {`${skill}${i < project.skills.length - 1 ? ` • ` : ""}`}
              </p>
            ))}
          </div>
          <div className="flex space-x-3">
            {project.live && (
              <a href={project.live} target="_blank">
                <div className="flex w-fit leading-none pb-1 my-1 items-center">
                  <AiOutlineLink className="mr-2" color="white" size={26} />
                </div>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank">
                <div className="flex w-fit leading-none pb-1 my-1 items-center">
                  <AiFillGithub className="mr-2" color="white" size={26} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
