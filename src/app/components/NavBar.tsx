/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";
import { motion } from "framer-motion";
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
    <div className="fixed left-12 top-0 h-full z-[2000] flex items-center pl-6">
      <div className="relative flex flex-col gap-1 bg-[#F6F1E9] rounded-xl px-2 py-2">
        {navbarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={`navbar-item-${item.path}-${item.name}`}
              href={item.path}
              className="relative flex items-center justify-center w-12 h-12 px-2 rounded-lg z-10"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-[#FEFEFE] rounded-lg"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <Icon size={24} className="relative z-10 text-[#CCB7A6]" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
