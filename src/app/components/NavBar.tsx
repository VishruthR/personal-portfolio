/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorX, setIndicatorX] = useState(0);

  // Calculate x position of active indicator
  const findIndicatorPosition = useCallback(() => {
    const activeIndex = navbarItems.findIndex(item => item.path === pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex] && containerRef.current) {
      const activeItem = itemRefs.current[activeIndex];
      const container = containerRef.current;
      const itemRect = activeItem?.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const x = itemRect ? itemRect.left - containerRect.left : 0;
      setIndicatorX(x);
    }
  }, [pathname]);

  useEffect(() => {
    findIndicatorPosition();

    window.addEventListener('resize', findIndicatorPosition);
    return () => window.removeEventListener('resize', findIndicatorPosition);
  }, [pathname, findIndicatorPosition]);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex justify-center sticky top-0 left-0 z-[2000] items-center w-full pt-12 pb-4 pointer-events-none">
      <div 
        ref={containerRef}
        className="relative flex gap-1 bg-[#F6F1E9] rounded-xl px-2 py-2 shadow-sm pointer-events-auto" 
        style={{ boxShadow: '0 2px 12px rgba(92, 74, 58, 0.18)' }}
      >
        {navbarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={`navbar-item-${item.path}-${item.name}`}
              ref={(el) => { itemRefs.current[index] = el; }}
              href={item.path}
              className="relative flex items-center justify-center w-12 h-10 px-2 rounded-lg z-10"
            >
              <Icon size={24} className="relative z-10 text-[#CCB7A6] hover:text-brownDark" />
            </Link>
          );
        })}
        {navbarItems.some(item => item.path === pathname) && (
          <motion.div
            className="absolute top-2 bottom-2 bg-[#FEFEFE] rounded-lg"
            style={{
              width: 48, // w-12 = 48px
            }}
            initial={false}
            // Animating only x position prevents vertical animations as position of navbar shifts
            animate={{
              left: indicatorX,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
