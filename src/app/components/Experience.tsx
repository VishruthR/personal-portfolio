import { experiences } from "@/data/experiences";
import { AiOutlineDownload } from "react-icons/ai";
import { SingleExperience } from "./SingleExperience";

const Experience = () => {
  return (
    <div className="my-8" id="experience">
      <p className="text-white font-bold md:text-6xl sm:text-4xl mb-8">
        Experience
      </p>
      <div className="flex mb-8">
        <p className="text-white font-medium pr-2">Resume</p>
        <AiOutlineDownload color="white" size={20} />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {experiences.map((experience) => (
          <SingleExperience
            key={`experience-${experience.name}-${experience.position}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
