/* eslint-disable @next/next/no-img-element */
"use client";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BREAKPOINTS, links } from "../../data/utils";
import { useEffect, useState } from "react";
import { useBreakpoint } from "use-breakpoint";
import { Menu } from "./Menu";
import { useHydrated } from "@/hooks/useHydrated";

const navbarItems = [
  {
    name: "HOME",
    element: "landing",
  },
  {
    name: "EXPERIENCE",
    element: "experience",
  },
  {
    name: "PROJECTS",
    element: "projects",
  },
];

interface NavbarItem {
  name: string;
  element: string;
}

const NavBar = () => {
  const [closestNavbarItem, setClosestNavbarItem] = useState(navbarItems[0]);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isDesktop = breakpoint === "desktop";
  const hydrated = useHydrated();

  const handleClick = (element: string) => {
    const elementToScroll = document.getElementById(element);

    if (!elementToScroll) {
      return;
    }

    const y = elementToScroll.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const yOffsets = navbarItems.map((item) => {
        const element = document.getElementById(item.element);

        if (!element) {
          return -1000;
        }

        // Get middle of element box and subtract from window Y
        return (
          element.getBoundingClientRect().top -
          element.getBoundingClientRect().bottom / 2 +
          element.getBoundingClientRect().bottom -
          window.scrollY
        );
      });

      const minIdx = yOffsets.reduce((smallestIdx, currNum, currIdx) => {
        if (Math.abs(yOffsets[smallestIdx]) > currNum) {
          return currIdx;
        } else {
          return smallestIdx;
        }
      }, 0);

      setClosestNavbarItem(navbarItems[minIdx]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!hydrated) {
    return null;
  }

  const renderNavbarItem = (item: NavbarItem) => {
    return (
      <div
        key={`navbar-item-${item.element}`}
        className={`mx-4 cursor-pointer w-min ${
          item.name === closestNavbarItem.name
            ? "border-b-teal border-b-2"
            : "border-none"
        }`}
        onClick={() => handleClick(item.element)}
      >
        <p
          className={`${
            item.name === closestNavbarItem.name ? "text-teal" : "text-white"
          } hover:text-teal`}
        >
          {item.name}
        </p>
      </div>
    );
  };

  return (
    <div className="flex justify-between sticky top-0 left-0 z-[2000] items-center w-full bg-backgroundBlack h-14 border-b-4 border-b-white">
      <div className="flex px-2">
        <a href={links.github} target="_blank">
          <AiFillGithub className="mx-2" color="white" size={32} />
        </a>
        <a href={links.linkedin} target="_blank">
          <FaLinkedin className="mx-2" color="white" size={32} />
        </a>
      </div>
      <div className="absolute left-1/2">
        <img src="/logo.png" alt="Vishruth Raj logo" />
      </div>
      {isDesktop ? (
        <div className="flex pr-3">
          {navbarItems.map((item) => renderNavbarItem(item))}
        </div>
      ) : (
        <div>
          <Menu>{navbarItems.map((item) => renderNavbarItem(item))}</Menu>{" "}
        </div>
      )}
    </div>
  );
};

export default NavBar;
