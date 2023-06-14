/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";
import { useHydrated } from "@/hooks/useHydrated";

export default function Home() {
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center bg-backgroundBlack w-full h-full min-h-screen">
        <img src="/logo.png" alt="Vishruth Raj logo" />
      </div>
    );
  }

  return (
    <div className="bg-backgroundBlack w-full h-full min-h-screen">
      <NavBar />
      <div className="w-full md:px-16 sm:px-3">
        <Landing />
        <Experience />
        <Projects />
      </div>
      <Analytics />
    </div>
  );
}
