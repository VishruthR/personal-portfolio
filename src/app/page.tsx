/* eslint-disable @next/next/no-img-element */
"use client";

import Landing from "./components/Landing";
import { Analytics } from "@vercel/analytics/react";
import { useHydrated } from "@/hooks/useHydrated";

export default function Home() {
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center bg-beige w-full h-full min-h-screen">
        <img src="/logo.png" alt="Vishruth Raj logo" />
      </div>
    );
  }

  return (
    <div className="bg-beige w-full h-full">
      <div className="w-full md:px-16 sm:px-3">
        <Landing />
      </div>
      <Analytics />
    </div>
  );
}
