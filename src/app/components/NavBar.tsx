/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";
import { HiHome } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const navbarItems = [
  {
    name: "HOME",
    path: "/",
    icon: HiHome,
  },
  {
    name: "ABOUT",
    path: "/about",
    icon: HiUser,
  },
  {
    name: "PROJECTS",
    path: "/projects",
    icon: HiWrenchScrewdriver,
  },
];

interface NavbarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const NavBar = () => {
  const pathname = usePathname();
  const hydrated = useHydrated();

  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex justify-center sticky top-0 left-0 z-[2000] items-center w-full bg-beige pt-6 pb-4">
      <div className="flex gap-3">
        {navbarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={`navbar-item-${item.path}-${item.name}`}
              href={item.path}
              className={`
                flex items-center justify-center
                w-14 h-10
                rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? "bg-brownDark text-beige"
                    : "bg-brownLight text-brown hover:bg-brown hover:text-beige"
                }
              `}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
