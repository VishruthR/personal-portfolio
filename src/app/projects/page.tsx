import Projects from "../components/Projects";
import { Analytics } from "@vercel/analytics/react";

export default function ProjectsRoute() {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="w-full md:px-16 sm:px-3">
        <Projects />
      </div>
      <Analytics />
    </div>
  );
}

