import { projects } from "@/data/projects";
import { Project } from "./Project";

const Projects = () => {
  const groupedProjects = projects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => b.localeCompare(a));

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen px-6 pt-[10vh]"
      id="projects"
    >
      <div className="flex flex-col items-center max-w-2xl w-full space-y-8">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-brown w-full">
          Projects
        </h1>

        <div className="flex flex-col space-y-6 text-brownMuted text-base md:text-lg leading-relaxed w-full text-left font-playfair">
          <p>
            I'm always trying to work on something on the side. Here's an incomplete list of things I've worked on.
          </p>

          <div className="space-y-3">
            <p className="font-playfair">Currently:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Open-source budgeting app so I can track my finances</li>
              <li>
                An e-ink display like{" "}
                <a
                  href="https://www.youtube.com/watch?v=58QWxoFvtJY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brownDark transition-colors"
                >
                  this
                </a>
              </li>
            </ul>
          </div>

          {sortedYears.map((year) => (
            <div key={year} className="space-y-4">
              <h2 className="font-playfair text-2xl md:text-3xl font-normal text-brown">
                {year}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedProjects[year].map((project) => (
                  <Project key={project.name} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
