import AboutMe from "../components/AboutMe";
import { Analytics } from "@vercel/analytics/react";

export default function AboutPage() {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="w-full md:px-16 sm:px-3">
        <AboutMe />
      </div>
      <Analytics />
    </div>
  );
}

