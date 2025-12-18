"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BiSolidChevronRight, BiSolidChevronDown } from "react-icons/bi";

interface Project {
  name: string;
  sentence: string;
  description: string;
  live: string | null;
  github: string | null;
  screenshot: string;
  skills: string[];
  year: string;
}

interface ProjectProps {
  project: Project;
}

export const Project = ({ project }: ProjectProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);

    const timeout = expanded ? 20 : 100;

    setTimeout(() => {
      setShowDescription(!showDescription);
    }, timeout);
  };

  return (
    <div className="flex flex-col justify-between rounded-lg w-full max-w-[320px] h-[300px] min-w-0">
      {project.screenshot && (
        <div
          className={`w-full overflow-hidden transition-all ease-in-out rounded-t-lg duration-200 relative ${
            expanded ? "h-0" : "h-[65%]"
          }`}
        >
          {!expanded && (
            <Image
              src={`/${project.screenshot}`}
              alt={`Project ${project.name} screenshot`}
              fill
              className="object-cover rounded-lg rounded-b-none border-2 border-brownProjectBorder border-b-0"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          )}
        </div>
      )}
      <div className={`flex flex-col flex-1 justify-between px-3 pt-3 pb-3 border-2 border-brownProjectBorder ${expanded ? "rounded-lg" : "rounded-b-lg"}`}>
        <div className="space-y-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleExpanded}
          >
            <p className="text-brown mr-2 leading-none">
              {project.name}
            </p>
            {expanded ? (
              <BiSolidChevronDown className="text-brown" size={20} />
            ) : (
              <BiSolidChevronRight className="text-brown" size={20} />
            )}
          </div>
          <p
            className={`text-brownMuted text-sm transition-all ease-in-out duration-200 font-inter ${
              expanded ? "h-full" : "h-[35%]"
            }`}
          >
            {showDescription ? project.description : project.sentence}
          </p>
        </div>
        <div className="flex justify-end items-center pt-2">
          <div className="flex space-x-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <AiOutlineLink className="text-brown" size={24} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <AiFillGithub className="text-brown" size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
