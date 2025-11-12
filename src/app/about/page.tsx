import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import { Analytics } from "@vercel/analytics/react";

export default function AboutPage() {
  return (
    <div className="bg-beige w-full h-full min-h-screen">
      <NavBar />
      <div className="w-full md:px-16 sm:px-3">
        <AboutMe />
      </div>
      <Analytics />
    </div>
  );
}

